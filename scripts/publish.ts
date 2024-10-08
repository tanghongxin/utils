import {
  inc, valid, gt, ReleaseType,
} from 'semver';
import inquirer, { QuestionCollection } from 'inquirer';
import { getVersion, updateVersion } from './pkg';
import { run } from './utils';

async function main(): Promise<void> {
  try {
    run('git diff-index --quiet HEAD');
  } catch (e) {
    console.error('Please make sure your git status is clean and then retry.');
    process.exit(1);
  }

  try {
    const branch = run('git rev-parse --abbrev-ref HEAD');
    if (branch !== 'main') throw new Error('Please use the main branch.');

    run('pnpm lint');
    run('pnpm test:once');
    const newVersionInput = await inquirer.prompt({
      type: 'input',
      name: 'version',
      message: 'Please enter the new version (or leave it blank for options):',
    });

    const curVersion = getVersion();
    let newVersion: string;

    if (newVersionInput.version) {
      if (!valid(newVersionInput.version) || !gt(newVersionInput.version, curVersion)) {
        console.error('Invalid version or version is not greater than the current version.');
        process.exit(1);
      }
      newVersion = newVersionInput.version;
    } else {
      const prompt: QuestionCollection<any> = {
        type: 'list',
        name: 'versionIncrement',
        message: 'Please select the version increment:',
        choices: ['major', 'minor', 'patch'].map((release) => {
          const version = inc(curVersion, release as ReleaseType);
          return {
            name: `${release} (${version})`,
            value: version,
          };
        }),
        default: 2,
      };

      const { versionIncrement } = await inquirer.prompt(prompt);
      newVersion = versionIncrement;
    }

    updateVersion(newVersion);
    run('git stage package.json');
    run(`git commit -m ':bookmark: release v${newVersion}'`);
    run(`git tag v${newVersion}`);
    run('git push');
    run('git push --tags');
    run('pnpm build');
    run('pnpm publish --access public');

    process.exit(0);
  } catch (err) {
    console.error(err.stdout ? err.stdout.toString().trim() : err);
    process.exit(1);
  }
}

main();

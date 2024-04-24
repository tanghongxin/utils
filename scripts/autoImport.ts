import fs from 'fs/promises';
import path from 'path';

const srcDir = path.join(__dirname, '../src');
const indexPath = path.join(srcDir, 'index.ts');

(async () => {
  await fs.writeFile(
    indexPath,
    (
      await fs.readdir(srcDir)
    )
      .filter((file) => file !== 'index.ts' && file.endsWith('.ts'))
      .map((file) => `export * from './${file.replace('.ts', '')}';\n`)
      .join(''),
  );
})();

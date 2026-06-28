import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(scriptDir, '../src');
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

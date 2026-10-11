import { readdir, readFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
async function check(directory) {
  for (const entry of await readdir(new URL(directory, new URL('../', import.meta.url)), { withFileTypes:true })) {
    const path = `${directory}${entry.name}`;
    if (entry.isDirectory()) await check(`${path}/`);
    else if (/\.(mjs|js)$/.test(path)) execFileSync(process.execPath, ['--check', path], { cwd:root, stdio:'pipe' });
    else if (path.endsWith('.json')) JSON.parse(await readFile(new URL(path, new URL('../', import.meta.url)), 'utf8'));
  }
}
await check('src/'); await check('scripts/'); await check('tests/');
for (const image of ['tenerife','prague','budapest','algarve']) await access(new URL(`../public/images/${image}.png`,import.meta.url));
console.log('JavaScript, JSON og allar ferðamyndir: í lagi.');

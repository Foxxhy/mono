import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(dirname, '..');
const repoRoot = path.resolve(packageRoot, '..', '..');
const sourcePath = path.join(repoRoot, 'to reuse', 'icon', 'Icon.list.ts');
const outputPath = path.join(packageRoot, 'dist', 'icons.svg');

const source = await readFile(sourcePath, 'utf8');
const executableSource = source.replace('export const ICONS =', 'const ICONS =');
const sandbox = {};

const icons = vm.runInNewContext(`${executableSource}\nICONS;`, sandbox, {
    filename: sourcePath,
});

if (!icons || typeof icons !== 'object') {
    throw new Error(`Unable to read icon definitions from ${sourcePath}`);
}

const symbols = Object.entries(icons)
    .map(([name, content]) => {
        if (typeof content !== 'string') {
            throw new Error(`Invalid SVG content for icon "${name}"`);
        }

        return `  <symbol id="${name}" viewBox="0 0 24 24">\n    ${content.replaceAll('\n', '\n    ')}\n  </symbol>`;
    })
    .join('\n');

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display: none;">\n${symbols}\n</svg>\n`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, sprite);

console.log(`Generated ${Object.keys(icons).length} icons in ${path.relative(repoRoot, outputPath)}`);

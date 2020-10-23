/**
 * Sync versions between root package.json a npm repository package.json
 */
import { copyFileSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { version } from '../package.json';

const packagePath = resolve(__dirname, '..', 'projects', 'ngx-cut', 'package.json');
const pkg = require(packagePath);

pkg.version = version;

writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

console.log('\x1b[34m', `Version info synced ${pkg.version}`);

// Copy README into dist folder
const copyFiles = ['README.md'];
for (const file of copyFiles) {
  copyFileSync(`./${file}`, `./projects/ngx-cut//${file}`);
}

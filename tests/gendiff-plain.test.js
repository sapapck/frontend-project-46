import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

const expected = readFile('expected-plain.txt');
const fileStylish1 = getFixturePath('before.json');
const fileStylish2 = getFixturePath('after.json');
const fileStylishYml1 = getFixturePath('before.yml');
const fileStylishYml2 = getFixturePath('after.yml');

test('testing plain format', () => {
  expect(genDiff(fileStylish1, fileStylish2, 'plain')).toBe(expected);
  expect(genDiff(fileStylishYml1, fileStylishYml2, 'plain')).toBe(expected);
});

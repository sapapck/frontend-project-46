import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', 'tests', '__fixtures__', filename);

const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

const expectedStylish = readFile('expected-recurcive.txt');
const expectedFlat = readFile('expected-flat.txt');
const expectedPlain = readFile('expected-plain.txt');

const fileJson1 = getFixturePath('file1.json');
const fileJson2 = getFixturePath('file2.json');
const fileYml1 = getFixturePath('file1.yml');
const fileYml2 = getFixturePath('file2.yml');

const fileStylishJson1 = getFixturePath('before.json');
const fileStylishJson2 = getFixturePath('after.json');
const fileStylishYml1 = getFixturePath('before.yml');
const fileStylishYml2 = getFixturePath('after.yml');

test('testing gendiff', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(expectedFlat);
  expect(genDiff(fileStylishJson1, fileStylishJson2)).toEqual(expectedStylish);

  expect(genDiff(fileYml1, fileYml2)).toEqual(expectedFlat);
  expect(genDiff(fileStylishYml1, fileStylishYml2)).toEqual(expectedStylish);

  expect(genDiff(fileStylishJson1, fileStylishJson2, 'plain')).toBe(expectedPlain);
  expect(genDiff(fileStylishYml1, fileStylishYml2, 'plain')).toBe(expectedPlain);
});

import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

const expectedStylish = readFile('expected-recurcive.txt');
const expected = readFile('expected-flat.txt');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const fileStylish1 = getFixturePath('before.json');
const fileStylish2 = getFixturePath('after.json');

test('testing gendiff', () => {
  expect(genDiff(file1, file2)).toEqual(expected);
  expect(genDiff(fileStylish1, fileStylish2)).toEqual(expectedStylish);
});

import path from 'node:path';
import fs from 'fs';
import getParsedData from './parser.js';
import buildAst from './getAst.js';
import formatAst from './formaters/index.js';

const getFileInformation = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), '__fixtures__', filepath);
  const readFile = fs.readFileSync(absolutePath, 'utf-8');
  const formatFile = path.extname(filepath).slice(1);
  const parsedData = getParsedData(readFile, formatFile);
  return parsedData;
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const dataFile1 = getFileInformation(filePath1);
  const dataFile2 = getFileInformation(filePath2);

  const content = buildAst(dataFile1, dataFile2);

  return formatAst(content, format);
};
export default genDiff;

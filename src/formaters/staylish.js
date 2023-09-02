/* eslint-disable default-case */
import _ from 'lodash';

const spaceCount = 4;
const offsetToLeft = 2;
const replacer = ' ';

const strinfyi = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indentSize = depth * spaceCount;
  const currentIndent = replacer.repeat(indentSize);
  const bracketIndent = replacer.repeat(indentSize - spaceCount);

  const list = Object.entries(value)
    .map(([key, val]) => `${currentIndent}${key}: ${strinfyi(val, depth + 1)}`);

  return ['{', ...list, `${bracketIndent}}`].join('\n');
};

const stylish = (ast) => {
  const iter = (tree, depth) => {
    const indentSize = depth * spaceCount;
    const currentIndent = replacer.repeat(indentSize - offsetToLeft);
    const bracketIndent = replacer.repeat(indentSize - spaceCount);

    const lines = tree.map((node) => {
      const {
        key, type, value, children, valueOld, valueNew,
      } = node;

      switch (type) {
        case 'deleted':
          return `${currentIndent}- ${key}: ${strinfyi(value, depth + 1)}`;

        case 'added':
          return `${currentIndent}+ ${key}: ${strinfyi(value, depth + 1)}`;

        case 'nested':
          return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`;

        case 'changed':
          return [
            `${currentIndent}- ${key}: ${strinfyi(valueOld, depth + 1)}`,
            `${currentIndent}+ ${key}: ${strinfyi(valueNew, depth + 1)}`,
          ].join('\n');

        case 'unchanged':
          return `${currentIndent}  ${key}: ${strinfyi(value, depth + 1)}`;
      }
      return null;
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(ast, 1);
};

export default stylish;

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
  const iter = (value, depth) => {
    const indentSize = depth * spaceCount;
    const currentIndent = replacer.repeat(indentSize - offsetToLeft);
    const bracketIndent = replacer.repeat(indentSize - spaceCount);

    const lines = value.map((node) => {
      switch (node.type) {
        case 'deleted':
          return `${currentIndent}- ${node.key}: ${strinfyi(node.value, depth + 1)}`;

        case 'added':
          return `${currentIndent}+ ${node.key}: ${strinfyi(node.value, depth + 1)}`;

        case 'nested':
          return `${currentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;

        case 'changed':
          return [
            `${currentIndent}- ${node.key}: ${strinfyi(node.valueOld, depth + 1)}`,
            `${currentIndent}+ ${node.key}: ${strinfyi(node.valueNew, depth + 1)}`,
          ].join('\n');

        case 'unchanged':
          return `${currentIndent}  ${node.key}: ${strinfyi(node.value, depth + 1)}`;
      }
      return null;
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(ast, 1);
};

export default stylish;

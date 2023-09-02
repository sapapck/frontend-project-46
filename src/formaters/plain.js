/* eslint-disable default-case */
import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : `${value}`;
};

const plain = (ast) => {
  const iter = (tree, accKey) => {
    const list = tree.flatMap((node) => {
      const {
        value, valueOld, valueNew, children,
      } = node;

      const path = [...accKey, node.key];
      const currentPath = path.join('.');
      switch (node.type) {
        case 'deleted':
          return `Property '${currentPath}' ${'was removed'}`;
        case 'added':
          return `Property '${currentPath}' ${'was added with value'}: ${stringify(value)}`;
        case 'changed':
          return `Property '${currentPath}' was updated. From ${stringify(valueOld)} to ${stringify(valueNew)}`;
        case 'nested':
          return `${iter(children, path)}`;
        case 'unchanged':
          return [];
        default:
          throw new Error('Unknown');
      }
    });
    return list.join('\n');
  };
  return iter(ast, []);
};

export default plain;

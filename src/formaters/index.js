import stylish from './staylish.js';
import plain from './plain.js';
import json from './json.js';

const formatAst = (ast, format) => {
  switch (format) {
    case 'stylish':
      return stylish(ast);
    case 'plain':
      return plain(ast);
    case 'json':
      return json(ast);
    default:
      throw new Error(`unknow type of format${format} `);
  }
};

export default formatAst;

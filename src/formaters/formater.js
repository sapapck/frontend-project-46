const formaterAst = (ast) => {
  const result = ast.map((node) => {
    switch (node.type) {
      case 'deleted':
        return `  - ${node.key}: ${node.value}`;

      case 'added':
        return `  + ${node.key}: ${node.value}`;

      case 'changed':
        return `  - ${node.key}: ${node.valueOld}\n  + ${node.key}: ${node.valueNew}`;

      case 'unchanged':
        return `    ${node.key}: ${node.value}`;

      default:
        throw new Error(`Unknown type of ${node}`);
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default formaterAst;

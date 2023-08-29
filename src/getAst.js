import _ from 'lodash';

const buildAst = (o1, o2) => {
  const keys = _.union(_.keys(o1), _.keys(o2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    const value1 = o1[key];
    const value2 = o2[key];

    if (!_.has(o2, key)) {
      return { key, value: value1, type: 'deleted' };
    }

    if (!_.has(o1, key)) {
      return { key, value: value2, type: 'added' };
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, children: buildAst(value1, value2), type: 'nested' };
    }

    if (_.has(o1, key) && _.has(o2, key) && (value1 !== value2)) {
      return {
        key, valueOld: value1, valueNew: value2, type: 'changed',
      };
    }
    return { key, value: value1, type: 'unchanged' };
  });
  return result;
};

export default buildAst;

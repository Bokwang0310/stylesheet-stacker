const src = [
  { id: '1', sectionList: [] },
  { id: '2', sectionList: [] },
  { id: '3', sectionList: [] },
  { id: '4', sectionList: [] },
];

const replaceItem = (condFn, replacement, list) => {
  return list.map(item => {
    if (condFn(item)) return replacement;
    return item;
  });
};

const a = replaceItem(
  item => item.id === '3',
  { id: '3', sectionList: [1] },
  src
);

console.log(a);

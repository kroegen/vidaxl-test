
export function isIncludes(array, id) {
  const ids = array.filter(el => el.id);

  if (ids.includes(id)) return true;

  return false;
}

export function indexOf(array, id) {
  const ids = array.filter(el => el.id);

  return ids.indexOf(id);
}

export function getIds(array) {
  return array && array.length ? array.map(el => el.id) : [];
}

export function merge(arr1, arr2, key = 'id') {
  return [
    ...arr2.filter(a => !arr1.find(b => b[key] === a[key])),
    ...arr1,
  ];
}

export function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => { // eslint-disable-line
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}


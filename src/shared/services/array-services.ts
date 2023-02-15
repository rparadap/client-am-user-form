export const arraySplitter = (array: object[], num: number): object[][] => {
  const result: object[][] = [];
  let subArray: object[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i % num === 0 && i !== 0) {
      result.push(subArray);
      subArray = [];
    }
    subArray.push(array[i]);
  }
  result.push(subArray);

  return result;
};
export const arraySorter = (
  array: object[],
  property: string,
  isDesecnding = false
): object[] => {
  if (!property) return array;

  return array.sort((a: any, b: any) => {
    if (isDesecnding) {
      if (a[property] < b[property]) {
        return 1;
      } else if (a[property] > b[property]) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (a[property] > b[property]) {
        return 1;
      } else if (a[property] < b[property]) {
        return -1;
      } else {
        return 0;
      }
    }
  });
};
export const arrayFilter = (array: any[], keyword: string) => {
  const matches = [];
  if (!keyword) return array;
  for (const obj of array) {
    for (const prop in obj) {
      if (
        // eslint-disable-next-line no-prototype-builtins
        obj.hasOwnProperty(prop) &&
        (obj[prop] as string)
          .toString()
          .toLowerCase()
          .includes(keyword.toLowerCase())
      ) {
        matches.push(obj);
        break;
      }
    }
  }

  return matches;
};

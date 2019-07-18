export const convertToImgList = (m = []) =>
  m.reduce((a, c) => [...a, c.img], []);

export const convertToTwoVectorArray = (arr = []) =>
  arr.reduce(
    (rows, key, index) =>
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );

export const convertToThreeVectorArray = (arr = []) =>
  arr.reduce(
    (rows, key, index) =>
      (index % 3 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );

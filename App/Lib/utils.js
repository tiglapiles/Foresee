export const convertToImgList = (m = []) =>
  m.reduce((a, c) => [...a, c.img], []);

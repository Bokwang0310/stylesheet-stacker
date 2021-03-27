import css2Obj from 'css-to-object';

const formatSingleDigit = num =>
  String(num).length < 2 ? `0${num}` : String(num);

export const formatDate = date =>
  [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map(formatSingleDigit)
    .join('/');

export const findIndexOfItem = (itemToFind, arr) =>
  arr.findIndex(item => item === itemToFind);

export const detectMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem);
  });
};

export const cssToObj = css => {
  try {
    return css2Obj(css, { camelCase: true });
  } catch {
    return {};
  }
};

export const checkValidTagName = tagNameToTest => {
  try {
    return (
      document.createElement(tagNameToTest).toString() !==
      '[object HTMLUnknownElement]'
    );
  } catch {
    return false;
  }
};

export const isEmptyString = str => !str.trim();

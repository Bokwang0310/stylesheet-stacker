const formatSingleDigit = num =>
  String(num).length < 2 ? `0${num}` : String(num);

export const formatDate = date =>
  [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map(formatSingleDigit)
    .join('/');

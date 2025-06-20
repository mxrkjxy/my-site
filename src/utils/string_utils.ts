export const pluralSafeString = (string, array) => {
  if (!string) return '';

  return `${string}${array.length > 1 ? 's' : ''}`;
};

export const camelToProperCase = (camelCaseString) => {
  if (!camelCaseString) return '';

  return camelCaseString
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

export const camelToKebabCase = (camelCaseString) => {
  if (!camelCaseString) return '';

  return camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
};
export const maskLabel = (srcStr, validChars) => {
  return srcStr.length > validChars ? srcStr.slice(0, validChars) + '...' : srcStr;
};
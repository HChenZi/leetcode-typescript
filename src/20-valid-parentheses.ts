function isValid(s: string): boolean {
  if ((s.length & 1) === 1) {
    return false;
  }
  let linkList = new Array();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      linkList.push(')')
    } else if (s[i] === '[') {
      linkList.push(']')
    } else if (s[i] === '{') {
      linkList.push('}')
    } else if (s[i] !== linkList.pop()) {
      return false;
    }
  }
  return linkList.length === 0
};

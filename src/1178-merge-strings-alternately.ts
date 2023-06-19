function mergeAlternately(word1: string, word2: string): string {
  let word1Arr = word1.split('');
  let word2Arr = word2.split('');
  let result = '';
  while (word1Arr.length || word2Arr.length) {
    if (word1Arr.length) {
      result += word1Arr.shift();
    }
    if (word2Arr.length) {
      result += word2Arr.shift();
    }
  }
  return result;
};

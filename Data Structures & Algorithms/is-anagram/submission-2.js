class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if (s.length !== t.length) return false;
      const repeat = new Array(26).fill(0);
      for(let i = 0;i<s.length; i++) {
        repeat[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        repeat[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
      }
      console.log(repeat)
      return repeat.every((l) => l===0)
    }
}

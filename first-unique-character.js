/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        let character = s[i];
        map[character] = map[character] + 1 || 1;
    }

    for (let i = 0; i < s.length; i++) {
        let character = s[i];
        if (map[character] === 1) {
            return i;
        }
    }
    return -1;

};

console.log(firstUniqChar("leetcode"));
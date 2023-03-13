/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        let firstWord = s.split("").sort().join();
        let secondWord = t.split("").sort().join();

        return firstWord === secondWord;
    }
};

console.log(isAnagram("rat", "car"));

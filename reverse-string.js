/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    let temp = [];

    while (leftPointer < rightPointer) {
        temp = s[rightPointer];
        s[rightPointer] = s[leftPointer];
        s[leftPointer] = temp;

        leftPointer++;
        rightPointer--;
    }

};

const character = [`a`, `b`, `c`];
reverseString(character)
console.log(character)



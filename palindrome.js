function isPalindrome(x) {
    if (x < 0) {
        return false;
    }

    let index = 1;

    while (x >= 10 * index) {
        index *= 10;
    }

    while (x !== 0) {
        let right = x % 10;
        let left = Math.trunc(x / index);
        if (left !== right) {
            return false;
        }
        x = Math.trunc((x % index) / 10);
        index = Math.trunc(index / 100);

    }
    return true;

}


console.log(isPalindrome(121));

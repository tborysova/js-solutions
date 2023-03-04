function twoNumbersSum(array, target) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        let diff = target - value;
        if (map.has(diff)) {
            return [i, map.get(diff)];
        }
        map.set(value, i);
    }


}

let array = [1, 2, 5, 6, 7];


console.log(twoNumbersSum(array, 8));

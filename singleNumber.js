let singleNumber = function (array) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1)
        } else {
            map.set(array[i], 1);
        }
    }

    for (let key of map.keys()) {
        if (map.get(key) === 1) {
            return key;
        }
    }

}







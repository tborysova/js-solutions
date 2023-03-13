let singleNumber = function (array) {
    let count = 0;
    let majorityElement = null;

    for (let num of nums) {
        if (count === 0) {
            majorityElement = num;
        }
        count += (num === majorityElement) ? 1 : -1;
    }

    return majorityElement;

}







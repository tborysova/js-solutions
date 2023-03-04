/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let leftPointer = 0;
    let rightPointer = 1;

    let maxProfit = 0;

    while (rightPointer < prices.length) {
        if (prices[leftPointer] < prices[rightPointer]) {
            let profit = prices[rightPointer] - prices[leftPointer];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            leftPointer = rightPointer;
        }
        rightPointer += 1;
    }

    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))














// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let leftPointer = 0;
//     let rightPointer = 1;
//
//     let maxProfit = 0;
//
//     while (rightPointer < prices.length) {
//         if (prices[leftPointer] < prices[rightPointer]) {
//             let profit = prices[rightPointer] - prices[leftPointer];
//             maxProfit = Math.max(maxProfit, profit);
//         } else {
//             leftPointer = rightPointer;
//         }
//         rightPointer += 1;
//     }
//
//     return maxProfit;
// };
//
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))


let stockPrice = function (nums) {
    let leftPointer = 0;
    let rightPointer = 1;
    let maxProfit = 0;

    while (rightPointer < nums.length) {
        if (nums[leftPointer] < nums[rightPointer]) {
            let profit = nums[rightPointer] - nums[leftPointer];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            leftPointer = rightPointer;
        }
        rightPointer += 1;
    }
    return maxProfit;
}


console.log(stockPrice([1, 2, 3, 4, 7, 2]))
























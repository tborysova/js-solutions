/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let totalTime = 0
    for (let i = 0; i < timeSeries.length - 1; i++) {
        let gap = timeSeries[i + 1] - timeSeries[i]
        if (gap < duration) {
            totalTime += gap
        } else {
            totalTime += duration
        }
    }
    totalTime += duration
    return totalTime
};
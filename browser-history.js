/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.i = 0;
    this.len = 1;
    this.history = [homepage];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    if (this.history.length < this.i + 2) {
        this.history.push(url);
    } else {
        this.history[this.i + 1] = url;
    }
    this.i += 1;
    this.len = this.i + 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    this.i = Math.max(this.i - steps, 0);
    return this.history[this.i];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    this.i = Math.min(this.i + steps, this.len - 1);
    return this.history[this.i];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
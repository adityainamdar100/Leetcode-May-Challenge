let a = [];
var StockSpanner = function() {
    a = [];
};

/** 
 * @param {number} price
 * @return {number}
 */

StockSpanner.prototype.next = function(price) {
    let cnt = 1;
    a.push(price);
    for(let i=a.length-2;i>=0;i--) {
        if(a[i]<=price)
            cnt += 1;
        else
            break;
    }
    // console.log(a);
    return cnt;
    
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

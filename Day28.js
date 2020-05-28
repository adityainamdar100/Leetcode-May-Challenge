/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let bits = [0];
    for(let i=1;i<=num;i++) {
        bits[i] = bits[i&(i-1)] + 1;
    }
    return bits;
};

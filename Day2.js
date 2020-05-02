/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let cnt = 0;
    [...S].forEach( s => J.indexOf(s)!==-1?cnt+=1:'');
    return cnt;
};

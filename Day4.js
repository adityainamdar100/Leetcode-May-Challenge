/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let s = num.toString(2);
    let s1 = [...s];
    s1.forEach((c,index) => {
        c==0?s1[index]=1:s1[index]=0;
    });
    return parseInt(s1.join(""),2);
};

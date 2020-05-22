/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let s1 = {};
    for(let i of s) {
        if(s1.hasOwnProperty(i))
            s1[i] += 1;
        else
            s1[i] = 1;
    }
    let sortable = [];
    for(let i in s1) {
        sortable.push([i,s1[i]]);
    }
    sortable.sort(function(a, b) {
    return b[1] - a[1];
    });
    let s2 = "";
    for(let i of sortable) {
        for(let j=1;j<=i[1];j++) {
            s2 += i[0];
        }
    }
    return s2;
};

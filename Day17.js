/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var isEqual = function(hasht,hashp) {
    for(let i in hashp) {
        if(!hasht[i])
            return false;
        if(hasht[i]!==hashp[i])
            return false;
    }
    return true;
}
var findAnagrams = function(s, p) {
    let hashp = {},hasht={};
    let result = [];
    if(p.length===0)
        return result;
    for(let i of p) {
        hashp[i] = 0;
        hasht[i] = 0;
    }
    for(let i of p) {
        hashp[i] += 1;
    }
    let plength = p.length;
    let i = 0, j = p.length-1;
    for(let k=i;k<=j;k++) {
        hasht[s[k]] += 1;
    }
    if(isEqual(hasht,hashp))
        result.push(0);
    i += 1;
    j += 1;
    hasht[s[0]] -= 1;
    hasht[s[j]] += 1;
    while(j<=s.length) {
        if(isEqual(hasht,hashp))
            result.push(i);
        hasht[s[i]] -= 1;
        i += 1;
        j += 1;
        hasht[s[j]] += 1;
    }
    return result;
};

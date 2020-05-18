/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isEqual = function(hasht,hashp) {
    for(let i in hasht) {
        if(hasht[i]!==hashp[i])
            return false;
    }
    return true;
}

var checkInclusion = function(s1, s2) {
    let s1Map = {},s2Map = {};
    for(let i of s1) {
        s1Map[i] = 0;
    }
    for(let i of s1) {
        s1Map[i] += 1;
    }
    let i=0, j=s1.length-1;
    for(let k=i;k<s2.length;k++) {
        s2Map[s2[k]] = 0;
    }
    for(let k=i;k<=j;k++) {
        s2Map[s2[k]] += 1;
    }
    if(isEqual(s1Map,s2Map))
        return true;
    if(j<s2.length-1) {
        while(j<s2.length-1) {
            s2Map[s2[i]]-=1;
            i += 1;
            j += 1;
            s2Map[s2[j]]+=1;
            if(isEqual(s1Map,s2Map))
                return true;
        }
    }
    return false;
};

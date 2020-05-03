/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rn = {};
    let mn = {};
    [...ransomNote].forEach( (c) => {
        rn.hasOwnProperty(c)?rn[c]++:rn[c]=0;
    });
    [...magazine].forEach( (c) => {
        mn.hasOwnProperty(c)?mn[c]++:mn[c]=0;
    });
    for(a in rn) {
        if(!mn.hasOwnProperty(a) || mn[a]<rn[a])return false;
    }
    return true;
};

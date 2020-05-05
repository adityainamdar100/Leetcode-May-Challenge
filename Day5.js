/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let cnt = -1;
    for(let i=0;i<s.length;i++) {
        if(s.lastIndexOf(s[i])===i && s.indexOf(s[i])===i){
            cnt = s.lastIndexOf(s[i]);
            break;
        }
    }
    return cnt;
};

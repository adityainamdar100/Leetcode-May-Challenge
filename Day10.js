/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let trusts = {};
    let trusted = {};
    for(let i=1;i<=N;i++) {
        trusts[i] = 0;
        trusted[i] = 0;
    }
    for(let i=0;i<trust.length;i++) {
        trusted[trust[i][1]]+=1;
        trusts[trust[i][0]]+=1;
    }
    let a = [];
    for(let i in trusted) {
        if(trusted[i] === N-1){
            a.push(i);
        }
    }
    for(let i of a) {
        if(trusts[i]===0){
            return i;
        }
    }
    return -1;
    
};

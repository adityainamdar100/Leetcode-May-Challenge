/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = [];
    let cnt = -1;
    for(let i=0;i<=word2.length;i++) {
        cnt += 1;
        let dp1 = [];
        for(let j=0;j<=word1.length;j++) {
            if(j===0) {
                dp1.push(cnt);
            }
            else if(i===0) {
                dp1.push(cnt+j);
            }
            else
                dp1.push(0);
            
        }
        dp.push(dp1);
    }
    for(let i=0;i<word2.length;i++) {
        for(let j=0;j<word1.length;j++) {
            if(word1[j]!==word2[i])
                dp[i+1][j+1] = Math.min(dp[i][j],dp[i+1][j],dp[i][j+1]) + 1;
            else
                dp[i+1][j+1] = dp[i][j];
        }
    }
    return dp[word2.length][word1.length];
};

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let dp = [], dp1 = [];
    let sum = A[0];
    dp.push(A[0]);
    dp1.push(A[0]);
    for(let i=1;i<A.length;i++) {
        let a = dp[i-1]+A[i];
        let b = dp1[i-1]+A[i];
        a>A[i]?dp.push(a):dp.push(A[i]);
        b<A[i]?dp1.push(b):dp1.push(A[i]);
        sum += A[i];
    }
    if(sum-Math.min(...dp1)===0)
        return Math.max(...dp);
    return sum-Math.min(...dp1)>Math.max(...dp)?sum-Math.min(...dp1):Math.max(...dp);
};

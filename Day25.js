/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    let a = [];
    if(A.length<B.length) {
        let c = A;
        A = B;
        B = c;
    }
    for(let i=0;i<=B.length;i++) {
        let b = [0];
        for(let j=0;j<A.length;j++) {
            b.push(0);
        }
        a.push(b);
    }
    for(let i=1;i<=B.length;i++) {
        for(let j=1;j<=A.length;j++) {
            if(B[i-1]===A[j-1]) {
                a[i][j] = a[i-1][j-1]+1;
            }
            else 
                a[i][j] = Math.max(a[i-1][j],a[i][j-1]);
        }
    }
    return a[B.length][A.length];
};

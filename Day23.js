/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let ans = [];
    let i=0,j=0;
    while(i<A.length && j<B.length) {
        let low = Math.max(A[i][0],B[j][0]);
        let high = Math.min(A[i][1],B[j][1]);
        if(low<=high) {
            let a = [low,high];
            ans.push(a);
        }
        if(A[i][1] < B[j][1]) 
            i++;
        else 
            j++;
    }
    return ans;
};

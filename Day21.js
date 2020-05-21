/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let c = matrix[0].length;
    let r = matrix.length;
    let mat = [];
    for(let i=0;i<=r;i++) {
        let mat1 = [];
        for(let j=0;j<=c;j++) {
            mat1.push(0);
        }
        mat.push(mat1);
    }
    let cnt = 0;
    for(let i=1;i<=r;i++) {
        for(let j=1;j<=c;j++) {
            if(matrix[i-1][j-1]!==0)
                mat[i][j] = Math.min(mat[i-1][j],mat[i-1][j-1],mat[i][j-1])+ matrix[i-1][j-1];
            else 
                mat[i][j] = 0;
            cnt += mat[i][j];
        }
    }
    return cnt;
};

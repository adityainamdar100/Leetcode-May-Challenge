/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let dist = {},sort1 = [];
    for(let i=0;i<points.length;i++) {
        let dist1 = Math.sqrt(points[i][0]*points[i][0]+points[i][1]*points[i][1]);
        if(dist[dist1]!==undefined)
            dist[dist1].push(i);
        else
            dist[dist1] = [i];
    }
    console.log(dist);
    for(let i in dist) {
        sort1.push(i);
    }
    sort1.sort( (a,b) => {
        return a-b;
    });
    let point = [];
    let cnt = 0;
    for(let i=0;i<sort1.length;i++) {
        for(let j of dist[sort1[i]]) {
            point.push(points[j]);
            cnt += 1;
            if(cnt===K)
                break;
        }        
        if(cnt===K)
            break;
    }
    return point;
};

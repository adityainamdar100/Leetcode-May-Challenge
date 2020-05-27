/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    let graph = {};
    for(let i=0;i<dislikes.length;i++) {
        if(graph[dislikes[i][0]-1])
            graph[dislikes[i][0]-1].push(dislikes[i][1]-1);
        else {
            let a = [];
            a.push(dislikes[i][1]-1);
            graph[dislikes[i][0]-1] = a;
        }
        if(graph[dislikes[i][1]-1])
            graph[dislikes[i][1]-1].push(dislikes[i][0]-1);
        else {
            let a = [];
            a.push(dislikes[i][0]-1);
            graph[dislikes[i][1]-1] = a;
        }
    }
    let color = [];
    for(let i=0;i<N;i++)
        color.push(0);
    
    for(let i=0;i<N;i++) {
        if(color[i]!== 0)
            continue;
        color[i] = 1;
        let q = [];
        q.push(i);
        while(q.length!==0) {
            let temp = q.shift();
            if(graph[temp]!==undefined){
            for(let j of graph[temp]) {
                if(color[temp] === color[j])
                    return false;
                if(color[j] === 0) {
                    color[j] = -color[temp];
                    q.push(j);
                }
            }
        }
        }
    }
    return true;
};

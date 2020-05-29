/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let graph = {};
let cyclic = function(i,visited,parent) {
    if(!visited[i]) {
        visited[i] = true;
        parent[i] = true;
        for(let v=0;v<graph[i].length;v++) {
            if(!visited[graph[i][v]] && cyclic(graph[i][v],visited,parent))
                return true;
            else if(parent[graph[i][v]])
                return true;
        }
    }
    parent[i] = false;
    return false;
}

var canFinish = function(numCourses, prerequisites) {
    let visited = [], parent = [];
    for(let i=0;i<numCourses;i++) {
        visited[i] = false;
        parent[i] = false;
        graph[i] = [];
    }
    for(let i=0;i<prerequisites.length;i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    for(let i=0;i<numCourses;i++) {
        if(cyclic(i,visited,parent))
            return false;
    }
    
    return true;
};

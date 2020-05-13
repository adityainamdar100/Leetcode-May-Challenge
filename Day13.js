/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let que = num.split('');
    let s = "";
    let stack = [];
    let i = 0;
    while(i < num.length) {
        while(k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k-=1;
        }
        stack.push(num[i]);
        i+=1;
    }
    s = stack.join('');
    if(k>0) {
        stack.splice(stack.length-k);
        s = stack.join('');
    }
    if(stack[0]==='0') {
        while(stack[0]==0) {
            stack.shift();
        }
        s = stack.join('');
    }
    if(stack.length===0)
        s += '0';
    return s;
    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let cntz = 0, maxLen = 0, a = {};
    a[0] = -1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===0)
            cntz -= 1;
        else
            cntz += 1;
        if(a[cntz]!==undefined) {
            maxLen = Math.max(maxLen, i-a[cntz]);
        }
        else
            a[cntz] = i;   
    }
    console.log(a);
    return maxLen;
};

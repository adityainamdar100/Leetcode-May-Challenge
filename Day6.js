/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maj_ind = 0;
    let cnt = 0;
    nums.forEach( (num,ind) => {
        nums[ind] === nums[maj_ind]?cnt+=1:cnt-=1;
        if(cnt === 0) {
            maj_ind = ind;
            cnt = 1;
        }
    });
    return nums[maj_ind];
};

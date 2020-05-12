/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let mid = parseInt(nums.length)/2;
    let low = 0, high = nums.length;
    while(true) {
        mid = parseInt((low+high)/2);
        if(mid!==0 && mid!==nums.length-1){
            if(nums[mid]!=nums[mid+1] && nums[mid]!=nums[mid-1])
                return nums[mid];
            else if(nums[mid]!=nums[mid+1] && nums[mid]==nums[mid-1]) {
                if((mid-1)%2===1)
                    high = mid-1;
                else
                    low = mid+1;
            }
            else if(nums[mid]==nums[mid+1] && nums[mid]!=nums[mid-1]) {
                if((mid+1)%2===1)
                    low = mid+1;
                else
                    high = mid-1;
            }
        }
        else {
            if(mid===0) {
                if(nums[mid]!==nums[mid+1])
                    return nums[mid];
                else 
                    return -1;
            }
            if(mid===nums.length-1) {
                if(nums[mid]!==nums[mid-1])
                    return nums[mid];
                else 
                    return -1;
            }
        }
    }
};

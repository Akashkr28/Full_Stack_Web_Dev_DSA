//https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    let n = nums.length;
    for(i = 0; i <= n-2; i++){
        for(j = i + 1; j < n; j++){
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
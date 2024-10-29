// https://leetcode.com/problems/3sum/submissions/1437345048/

var threeSum = function(nums) {
    nums.sort((a,b) => a-b); // Step 1: Sort the array
    const result = []

    for(let i = 0; i < nums.length -2; i++){
        //skip the duplicate elements to avoid duplicate triplets
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right){
            const currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                //Move pointers and skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;              
                left++;
                right--;  
            } else if (currentSum < 0) {
                left++; //Increase the sum
            } else {
                right--; // Decrease the sum
            }
        }
    }
    return result;
};

// Example usage:

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
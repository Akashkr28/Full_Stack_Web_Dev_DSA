https://leetcode.com/problems/sort-colors/

function sortColors(nums) {
    let zeroIndex = 0; // Pointer for the next position of 0
    let twoIndex = nums.length - 1; // Pointer for the next position of 2

    // Iterate through the array with a single pointer
    for (let i = 0; i <= twoIndex; i++) {
        while (nums[i] === 2 && i < twoIndex) {
            // Swap current element with the element at twoIndex
            [nums[i], nums[twoIndex]] = [nums[twoIndex], nums[i]];
            twoIndex--; // Move the twoIndex pointer left
        }

        if (nums[i] === 0) {
            // Swap current element with the element at zeroIndex
            [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
            zeroIndex++; // Move the zeroIndex pointer right
        }
    }
}

// Example usage:
const colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log(colors); // Output: [0, 0, 1, 1, 2, 2]


/*
## Explanation:

1. Pointers Initialization:
    - zeroIndex keeps track of the next position to place a 0.
    - twoIndex keeps track of the next position to place a 2.

2. Single Pointer Traversal:

    - Use a loop to traverse through the array.
    - If you encounter a 2, swap it with the element at twoIndex and decrement twoIndex.
    - If you encounter a 0, swap it with the element at zeroIndex and increment zeroIndex.

3. Final Positions:

    -All 0s will be moved to the front, all 2s to the back, and 1s will be left in the middle.
    
This implementation still adheres to the principles of in-place sorting with O(n) time complexity and O(1) space complexity. */
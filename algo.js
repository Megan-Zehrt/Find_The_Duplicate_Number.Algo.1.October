// 287. Find The Duplicate Number



// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.





/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let map = new Map()

    for(let i = 0; i < nums.length; i++){

        if(map.has(nums[i])){
            return nums[i]
        }else{
            map.set(nums[i], 1)
        }
    }
};
var twoSum = function(nums, target) {
    const hashSet = {}
    for (let i = 0; i<nums.length;i++) {
        const val = target - nums[i]
        if (val in hashSet) {
            return [hashSet[val], i]
        }
        hashSet[nums[i]] = i
    }
};

// 思路： 空间换时间
//
// 循环里面遍历过的元素，在 对象hashSet 中储存值和下标
// i增加的时候，计算当前元素和target的差值，并在 hashSet 查询是否有这个差值
// if true，返回下标


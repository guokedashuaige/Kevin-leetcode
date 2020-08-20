/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // 1. 构造哈希表
    const map = new Map(); // 存储方式 {need, index}

    // 2. 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 2.1 如果找到 target - nums[i] 的值
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            // 2.2 如果没找到则进行设置
            map.set(target - nums[i], i);
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]


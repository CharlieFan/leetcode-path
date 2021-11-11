// object key-value pair
function twoSum(nums, target) {
  const tempMap = {};
  let result = [];

  if (nums === undefined || nums.length < 1) {
    return [];
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const cached = tempMap[target - current];
    if (cached !== undefined) {
      result = [cached, i];
    }

    tempMap[nums[i]] = i;
  }

  return result;
}

// case 1
console.log(twoSum([2, 7, 11, 15], 9));

// case 2
console.log(twoSum([3, 2, 4], 6));

// case 3
console.log(twoSum([3, 3], 6));

// Map version
function twoSumFn(nums, target) {
  const tempMap = new Map();
  let result = [];

  if (nums === undefined || nums.length < 1) {
    return [];
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const cached = tempMap.get(target - current);
    if (cached !== undefined) {
      result = [cached, i];
    }

    tempMap.set(nums[i], i);
  }

  return result;
}

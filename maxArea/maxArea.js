/**
 * used two pointers
 * @param {number[]} height
 * @returns {number}
 */
const maxArea = (height) => {
    if (height.length < 2) {
        return 0;
    }

    if (height.length > 100000) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const area = width * Math.min(height[left], height[right]);

        if (height[left] > 10000 || height[right] > 10000) {
            break;
        }

        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

const case1 = maxArea([2, 3, 4, 5, 18, 17, 6]);

console.log(case1);

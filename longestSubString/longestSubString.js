/**
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s === "") {
        return 0;
    }

    const charMap = new Map();
    let maxLength = 0;
    let startPoint = 0;

    for (let i = 0; i < s.length; i++) {
        const savedIndex = charMap.get(s[i]);

        if (savedIndex === undefined) {
            let len = i - startPoint + 1;
            maxLength = maxLength > len ? maxLength : len;
        } else {
            if (startPoint <= savedIndex) {
                startPoint = savedIndex;
            }

            let len = i - startPoint + 1;

            if (s[startPoint] === s[i]) {
                len = i - startPoint;
            }

            if (savedIndex >= startPoint) {
                startPoint += 1;
            }

            maxLength = maxLength > len ? maxLength : len;
        }

        charMap.set(s[i], i);
    }

    return maxLength;
};

const test1 = lengthOfLongestSubstring("abcabcbb");
console.log(test1);

const test2 = lengthOfLongestSubstring("bbbbb");
console.log(test2);

const test3 = lengthOfLongestSubstring("pwwkew");
console.log(test3);

const test4 = lengthOfLongestSubstring("");
console.log(test4);

const test5 = lengthOfLongestSubstring("abba");
console.log(test5);

const test6 = lengthOfLongestSubstring("dvdf");
console.log(test6);

const test7 = lengthOfLongestSubstring("tmmzuxt");
console.log(test7);

const test8 = lengthOfLongestSubstring("aabaab!bb");
console.log(test8);

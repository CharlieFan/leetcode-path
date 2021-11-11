/**
 * check is palindrome string:
 * @param {String} str
 * @returns {Boolean}
 */
const isPalindromeStr = function (str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

/**
 * travers all solution:
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    const strLength = s.length;

    if (strLength < 2) {
        return s;
    }

    let starPoint = 0;
    let maxLength = 1;

    for (let i = 0; i < strLength - 1; i++) {
        for (let j = i + 1; j < strLength; j++) {
            const count = j - i + 1;
            const subStr = s.substr(i, count);

            if (isPalindromeStr(subStr) && count > maxLength) {
                starPoint = i;
                maxLength = count;
            }
        }
    }

    return s.substr(starPoint, maxLength);
};

const centerExpand = (s, l, r) => {
    let left = l;
    let right = r;

    while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
            left--;
            right++;
        } else {
            break;
        }
    }

    // right - left + 1 - 2;
    const len = right - left - 1;

    return {
        start: left + 1,
        len,
    };
};
/**
 * center expanding
 * @param {*} s
 * @returns
 */
const getLongestPalindrome = (s) => {
    const strLength = s.length;

    if (strLength < 2) {
        return s;
    }

    let starPoint = 0;
    let maxLength = 1;

    for (let i = 0; i < strLength - 1; i++) {
        const oddLength = centerExpand(s, i, i);
        const evenLength = centerExpand(s, i, i + 1);

        const longest = Math.max(oddLength.len, evenLength.len);
        let nextStart = starPoint;

        if (oddLength.len === longest) {
            nextStart = oddLength.start;
        } else if (evenLength.len === longest) {
            nextStart = evenLength.start;
        }

        if (longest > maxLength) {
            maxLength = longest;
            starPoint = nextStart;
        }
    }
    console.log(starPoint, maxLength);

    return s.substr(starPoint, maxLength);
};

const test1 = longestPalindrome("cbbd");
console.log(test1);

const test2 = getLongestPalindrome("babad");
console.log(test2);

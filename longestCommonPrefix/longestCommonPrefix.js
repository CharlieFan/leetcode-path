/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    let shortestLength = 201;

    for (let i = 0; i < strs.length; i++) {
        shortestLength = Math.min(shortestLength, strs[i].length);
    }

    let prefix = "";
    let shouldBreak = false;

    for (let i = 0; i < shortestLength; i++) {
        let currentChar = "";

        for (let j = 0; j < strs.length; j++) {
            if (currentChar === "") {
                currentChar = strs[j][i];
                continue;
            }

            if (currentChar !== strs[j][i]) {
                shouldBreak = true;
                break;
            }
        }

        if (shouldBreak) {
            break;
        }

        if (currentChar !== "") {
            prefix += currentChar;
        }
    }

    return prefix;
};

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["cir", "car"]));

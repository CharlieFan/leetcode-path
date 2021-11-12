/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const chars = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let res = 0;
    let hold = "";

    for (let i = 0; i < s.length; i++) {
        if (hold.length > 0) {
            hold += s[i];

            if (chars[hold] !== undefined) {
                res += chars[hold];
                hold = "";
            }

            continue;
        }

        if (chars[s[i]] >= chars[s[i + 1]] || s[i + 1] === undefined) {
            res += chars[s[i]];
        } else {
            hold += s[i];
        }
    }

    return res;
};

console.log(romanToInt("MCMXCIV"));

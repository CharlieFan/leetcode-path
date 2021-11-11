/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    if (s.length < 1 || s.length > 200) {
        return 0;
    }

    const safeMax = Math.pow(2, 31) - 1;
    const safeMin = 0 - Math.pow(2, 31);
    const trim = s.trim();

    let isNegative = false;
    let num = 0;

    for (let i = 0; i < trim.length; i++) {
        // Check sign +(43) -(45)
        if (
            i === 0 &&
            (trim.charCodeAt(i) === 43 || trim.charCodeAt(i) === 45)
        ) {
            isNegative = trim.charCodeAt(i) === 45;
            continue;
        }

        if (trim.charCodeAt(i) >= 48 && trim.charCodeAt(i) <= 57) {
            num = num * 10 + Number(trim[i]);
        } else {
            break;
        }
    }

    if (isNegative) {
        num = 0 - num;
    }

    if (num < safeMin) {
        return safeMin;
    }

    if (num > safeMax) {
        return safeMax;
    }

    return num;
};

console.log(myAtoi("abc"));
console.log(myAtoi("1abc"));
console.log(myAtoi(" 123abc"));
console.log(myAtoi(" -12abc"));
console.log(myAtoi(" -1 2abc"));

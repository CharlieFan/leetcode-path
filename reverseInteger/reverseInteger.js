/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const safeMax = Math.pow(2, 31) - 1;
    const safeMin = 0 - Math.pow(2, 31);

    if (x === 0 || x > safeMax || x < safeMin) {
        return 0;
    }

    const isNegative = x < 0;

    let absVal = x < 0 ? 0 - x : x;
    let res = 0;

    while (absVal > 0) {
        const temp = absVal % 10;
        res = res * 10 + temp;
        absVal = Math.floor(absVal / 10);
    }

    if (res <= safeMax && res >= safeMin) {
        return isNegative ? 0 - res : res;
    }

    return 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

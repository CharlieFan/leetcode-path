/**
 *
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 *
 */

/**
 * split adders:
 * @param {number} num
 * @return {number[]}
 */
const splitAdders = (num) => {
    let origin = num;

    let temp = 0;

    let deci = 0;

    let numbersPool = [];

    while (origin > 0) {
        temp = origin % 10;
        origin = (origin - temp) / 10;

        numbersPool = [temp * Math.pow(10, deci)].concat(numbersPool);

        deci += 1;
    }
    return numbersPool;
};

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    if (num < 1 || num > 3999) {
        return "";
    }

    const charMap = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    };

    const sequence = [1000, 500, 100, 50, 10, 5, 1];

    if (charMap[num] !== undefined) {
        return charMap[num];
    }

    const numbersPool = splitAdders(num);

    const transform = numbersPool.map((digit, index) => {
        if (charMap[digit] !== undefined) {
            return charMap[digit];
        }

        // if is 0
        if (digit === 0) {
            return "";
        }

        // if find left margin case:
        const foundLeft = sequence.find((seq) => {
            return charMap[seq - digit] !== undefined;
        });

        if (foundLeft) {
            return `${charMap[foundLeft - digit]}${charMap[foundLeft]}`;
        }

        const foundRight = sequence.find((seq, i) => {
            const diff = digit - seq;
            console.log(digit, seq);

            return (
                diff > 0 && digit % seq !== 0 && diff % sequence[i + 1] === 0
            );
        });

        if (foundRight) {
            const rightIndex = sequence.indexOf(foundRight) + 1;
            const rightNumber = sequence[rightIndex];
            const rightChar = charMap[rightNumber];

            return `${charMap[foundRight]}${rightChar.repeat(
                (digit - foundRight) / rightNumber
            )}`;
        }

        // find repeat element case:
        const foundRepeat = sequence.find((seq) => {
            return digit % seq === 0;
        });
        if (foundRepeat) {
            return `${charMap[foundRepeat].repeat(digit / foundRepeat)}`;
        }

        return "";
    });

    return transform.join("");
};

console.log(intToRoman(1));
console.log(intToRoman(20));
console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(5));
console.log(intToRoman(26));
console.log(intToRoman(1997));
console.log(intToRoman(1997));
console.log(intToRoman(666));
console.log(intToRoman(1010));
console.log(intToRoman(1111));

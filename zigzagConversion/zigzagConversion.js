/**
 * convert 2d array col to row and transfer as a string:
 * @param {Array} arry
 * @param {Number} numberOfRow
 * @returns {String}
 */
const convertColToRowAsString = (arry, numberOfRow) => {
    let resultStr = "";

    for (let i = 0; i < numberOfRow; i++) {
        for (let j = 0; j < arry.length; j++) {
            const element = arry[j][i];
            resultStr += element || "";
        }
    }

    return resultStr;
};
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1 || numRows > s.length) {
        return s;
    }

    const resultTable = [];
    let pending = [];
    let n = 1;
    let pick = 0;
    let shouldPick = false;

    const maxNumOfPick = numRows - 2;

    for (let i = 0; i < s.length; i++) {
        if (n > numRows) {
            n = 1;
            shouldPick = true;
        }

        if (pick >= maxNumOfPick) {
            shouldPick = false;
            pick = 0;
        }

        if (n <= numRows && !shouldPick) {
            pending = pending.concat([s[i]]);
            n += 1;
        } else {
            const pickRow = [];
            const lastPosition = numRows - 1;
            pickRow[lastPosition] = null;
            pickRow[lastPosition - 1 - pick] = s[i];
            pick += 1;
            resultTable.push(pickRow);
        }

        if (pending.length === numRows) {
            resultTable.push(pending);
            pending = [];
        }
    }

    // check pending again:
    if (pending.length > 0) {
        resultTable.push(pending);
        pending = [];
    }

    return convertColToRowAsString(resultTable, numRows);
};

/**
 * Better version of zig zag convert:
 * @param {String} s
 * @param {Number} numRows
 * @returns {Number}
 */
const zigZagConvert = (s, numRows) => {
    if (numRows === 1 || numRows > s.length) {
        return s;
    }

    const paper = [];
    let row = 0;
    let step = 1;

    for (let i = 0; i < s.length; i++) {
        paper[row] = (paper[row] || "") + s[i];

        if (row === 0) {
            step = 1;
        } else if (row === numRows - 1) {
            step = -1;
        }

        row += step;
    }

    return paper.join("");
};

const test1 = convert("PAYPALISHIRING", 3);
console.log("test1 to equal PAHNAPLSIIGYIR", test1 === "PAHNAPLSIIGYIR");

const test2 = convert("PAYPALISHIRING", 4);
console.log("test1 to equal PINALSIGYAHRPI", test2 === "PINALSIGYAHRPI");

console.log("better version zigZagConvert() --->");
const test3 = zigZagConvert("PAYPALISHIRING", 4);
console.log("test3 to equal PINALSIGYAHRPI", test3 === "PINALSIGYAHRPI");

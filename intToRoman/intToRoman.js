const intToRomanNum = (num) => {
    let origin = num;

    const chars = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = "";

    values.forEach((val, i) => {
        while (origin >= val) {
            origin -= val;
            result += chars[i];
        }
    });

    return result;
};

console.log(intToRomanNum(49));

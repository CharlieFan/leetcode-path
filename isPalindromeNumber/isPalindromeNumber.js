const isPalindromeNumber = (x) => {
    if (x < 0) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    let temp = x;
    let reversed = 0;
    let remainder;

    while (temp !== 0) {
        remainder = temp % 10;
        reversed = reversed * 10 + remainder;
        temp = (temp - remainder) / 10;
    }

    return reversed === x;
};

console.log(isPalindromeNumber(9999));

const isPalindrome = (x) => {
    if (x < 0) return false;

    let temp = x;
    let reversed = 0;
    let remainder;

    while (temp !== 0) {
        remainder = temp % 10;
        reversed = reversed * 10 + remainder;
        temp = Number(Number(temp / 10).toFixed(0));
    }

    return reversed === x;
};

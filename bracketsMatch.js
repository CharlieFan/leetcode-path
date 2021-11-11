const isBracketsMatch = (src) => {
    const openStack = [];

    // Match pair Map:
    const matchPair = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    if (!src) {
        return false;
    }

    for (let i = 0; i < src.length; i++) {
        if (src[i] === "(" || src[i] === "{" || src[i] === "[") {
            openStack.push(src[i]);
        } else {
            const last = openStack.pop();

            // check if match:
            if (src[i] !== matchPair[last]) {
                return false;
            }
        }
    }

    // check still have open brackets
    if (openStack.length !== 0) {
        return false;
    }

    return true;
};

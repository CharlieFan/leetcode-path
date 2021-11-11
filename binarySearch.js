const binarySearch = (list, target) => {
    const mid = Math.floor(list.length / 2);

    if (list[mid] === target) {
        return list[mid];
    } else if (list[mid] < target && list.length > 1) {
        return binarySearch(list.splice(mid, list.length), target);
    } else if (list[mid] > target && list.length > 1) {
        return binarySearch(list.splice(0, mid), target);
    } else {
        return null;
    }
};

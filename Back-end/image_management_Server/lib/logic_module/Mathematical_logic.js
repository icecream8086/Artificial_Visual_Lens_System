/**
 * Compares two arrays and returns an object containing two arrays: 
 * one with the elements that are present in both arrays, and another with the elements that are present in only one of the arrays.
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {Object} An object containing two arrays: same and diff.
 */

function compareArrays(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let same = [];
    let diff = [];

    for (let item of set1) {
        if (set2.has(item)) {
            same.push(item);
        } else {
            diff.push(item);
        }
    }

    for (let item of set2) {
        if (!set1.has(item)) {
            diff.push(item);
        }
    }

    return { same, diff };
}

module.exports = {
    compareArrays,
};
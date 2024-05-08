/**
 * Checks if any value in the object is an empty string.
 * @param obj - The object to check.
 * @returns True if any value is an empty string, false otherwise.
 */
export function objNo(obj) {
    for (let value of Object.values(obj)) {
        if (value === '') return true;
    }
    return false;
}

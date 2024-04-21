/* eslint-disable no-prototype-builtins */
class charts_dataChecker {
    // ...

    pie_dataChecker(data) {
        if (!Array.isArray(data)) {
            throw new Error('The input data must be an array');
        }
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (!item.hasOwnProperty('name') || !item.hasOwnProperty('value')) {
                throw new Error(`Data elements ${i} Must contain the name and value attributes`);
            }
            if (typeof item.value !== 'number') {
                throw new Error(`Data elements ${i} The value must be a number`);
            }
        }
    }
}

module.exports = { charts_dataChecker };
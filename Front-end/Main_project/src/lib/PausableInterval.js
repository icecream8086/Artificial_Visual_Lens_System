// `pause`、`resume`和`clear`。`pause`方法可以暂停计时器，`resume`方法可以恢复计时器，`clear`方法可以清除计时器。
/**
 * Creates a pausable interval that executes a function repeatedly with a specified delay.
 * @param {Function} func - The function to be executed.
 * @param {number} delay - The delay in milliseconds between each execution of the function.
 * @returns {Object} - An object with pause, resume, and clear methods.
 */
/**
 * Creates a pausable interval that executes a function repeatedly with a specified delay.
 * @param {Function} func - The function to be executed.
 * @param {number} delay - The delay in milliseconds between each execution of the function.
 * @returns {Object} - An object with pause, resume, and clear methods.
 */
function PausableInterval(func, delay) {
    let timerId;
    let paused = false;

    const intervalFunc = () => {
        if (!paused) {
            func();
            timerId = setTimeout(intervalFunc, delay);
        }
    };

    timerId = setTimeout(intervalFunc, delay);

    return {
        pause: function() {
            paused = true;
        },
        resume: function() {
            if (paused) {
                paused = false;
                clearTimeout(timerId); // 需要清除旧的定时器
                timerId = setTimeout(intervalFunc, delay); 
            }
        },
        clear: function() {
            clearTimeout(timerId);
        }
    };
}

module.exports = { PausableInterval };

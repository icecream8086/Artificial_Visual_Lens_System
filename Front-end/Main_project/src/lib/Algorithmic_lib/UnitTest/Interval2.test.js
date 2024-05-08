/* eslint-disable no-undef */
import {PausableInterval} from '../../Interval2';

describe('PausableInterval', () => {
    let interval;
    let func;
    let delay;

    beforeEach(() => {
        jest.useFakeTimers();
        func = jest.fn();
        delay = 1000;
        interval = PausableInterval(func, delay);
    });

    afterEach(() => {
        interval.clear();
        jest.clearAllTimers();
    });

    test('should call the function repeatedly with the specified delay', () => {
        jest.advanceTimersByTime(delay * 3);
        expect(func).toHaveBeenCalledTimes(3);
    });

    test('should pause the interval', () => {
        interval.pause();
        jest.advanceTimersByTime(delay * 3);
        expect(func).toHaveBeenCalledTimes(0);
    });

    test('should resume the interval', () => {
        interval.pause();
        interval.resume();
        jest.advanceTimersByTime(delay * 3);
        expect(func).toHaveBeenCalledTimes(3);
    });

    test('should clear the interval', () => {
        interval.clear();
        jest.advanceTimersByTime(delay * 3);
        expect(func).toHaveBeenCalledTimes(0);
    });
});
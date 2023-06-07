import { classNames } from './classNames';

describe('classNames', () => {
    test('Передача 1 аргумета - строки', () => {
        expect(classNames('test')).toBe('test');
    });

    test('Передача 2 аргуметов - строки и объекта mode', () => {
        expect(classNames('test', { test2: true })).toBe('test test2');
    });

    test('Передача 3 аргуметов - строки, объекта mode и массива', () => {
        expect(classNames('test', { test2: true }, ['test3']))
            .toBe('test test3 test2');
    });

    test('Передача 3 аргуметов - строки, объекта mode и массива. В объекте mode одно значение false - его не будет в итоге', () => {
        expect(classNames('test', { test2: true, test4: false }, ['test3']))
            .toBe('test test3 test2');
    });

    test('Передав пустую строку будет пустая строка', () => {
        expect(classNames(''))
            .toBe('');
    });
});

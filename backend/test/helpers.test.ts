import {countWords, median} from "../src/helpers";

describe('tests', () => {
    test('dummy test', () => {
        expect(1).toEqual(1);
    });

    test('count words', () => {
        expect(countWords('This is a sentence.')).toEqual(4);
    });

    test('median', () => {
        expect(median([7, 3, 5, 5, 19])).toEqual(5);
        expect(median([7, 3, 5, 5, 19])).toEqual(5);
    });

});

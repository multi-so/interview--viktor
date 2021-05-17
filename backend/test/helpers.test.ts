import {countWords, median} from "../src/helpers";

describe('tests', () => {
    test('count words', () => {
        expect(countWords('This is a sentence.')).toEqual(4);
    });

    test('median', () => {
        expect(median([5, 3, 7, 9, 1])).toEqual(5);
    });
});

import {countWords} from "../src/helpers";

describe('tests', () => {
    test('dummy test', () => {
        expect(1).toEqual(1);
    });

    test('count words', () => {
        expect(countWords('This is a sentence.')).toEqual(4);
    });

});

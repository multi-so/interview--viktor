export const countWords = (text) => {
    return text.split(/\s+/).length;
}

export const median = (numbers: number[]): number => {
    numbers.sort()
    return numbers[Math.floor(numbers.length / 2)]
}

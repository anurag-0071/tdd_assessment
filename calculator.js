const add = (numbers = '') => {
    // if no input return 0;
    if (numbers === '') {
        return 0;
    }

    let delimiter = ',';

    // get numbers by splitting at delimiter
    const nums = numbers.split(delimiter).map(Number);

    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add }
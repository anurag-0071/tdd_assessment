const add = (numbers = '') => {
    // if no input return 0;
    if (numbers === '') {
        return 0;
    }

    // create defalult delimiter pattern
    let delimiter = /[,\n]/;

    // add delimiter from input
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEnd);
        numbers = numbers.substring(delimiterEnd + 1);
    }

    // get numbers by splitting at delimiter
    const nums = numbers.split(delimiter).map(Number);

    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add }

/**======== Solution 1 ==========*/
const str = 'Race car';

function isPalindrome(str) {
    // Removing non word chars and whitespaces
    const reg = /[\W_\s]/g;
    let localStr = str.toLowerCase().replace(reg, '');
    return localStr.split('').reverse().join('') === localStr;
}

console.log(isPalindrome(str));


/**======== Solution 2 ==========*/
const str = 'Eva, can I see bees in a cave?';

const isPalindrome = function (str) {
    const reg = /[\W_\s]/g;
    str = str.toLowerCase().replace(reg, '');
    const len = str.length;
    const partOne = str.substring(0, Math.floor(len / 2));
    const partTwo = str.substring((len - Math.floor(len / 2)), len);
    return partOne === partTwo.split('').reverse().join('');
}

console.log(isPalindrome(str));


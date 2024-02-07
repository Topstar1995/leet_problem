/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim().split(' ');
    console.log(str);
    for (let i = 0; i < str.length; i ++) {
        if (str[str.length-1 - i] !== ' ')
        return str[str.length-1 - i].length
    }
};
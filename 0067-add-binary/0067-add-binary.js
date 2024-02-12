/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    // Iterate from the least significant bit to the most significant bit
    while (i >= 0 || j >= 0 || carry > 0) {
        const sum = (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
        result = (sum % 2) + result; // Append the least significant bit of the sum
        carry = Math.floor(sum / 2); // Update carry for the next iteration
    }

    return result;
};
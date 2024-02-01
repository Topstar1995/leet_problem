/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (brackets[char]) {
            // If it's an open bracket, push it onto the stack
            stack.push(char);
        } else {
            // If it's a close bracket, check if it matches the last open bracket
            const lastOpenBracket = stack.pop();
            if (char !== brackets[lastOpenBracket]) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are closed properly
    return stack.length === 0;
}
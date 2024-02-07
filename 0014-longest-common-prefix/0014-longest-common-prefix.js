/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the array is empty, return an empty string
    
    let prefix = strs[0]; // Initialize prefix with the first string
    
    // Iterate through the array of strings starting from the second string
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        
        // Iterate through characters of the current string and the prefix
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        
        prefix = prefix.slice(0, j); // Update prefix to the common prefix found so far
    }
    
    return prefix;
};
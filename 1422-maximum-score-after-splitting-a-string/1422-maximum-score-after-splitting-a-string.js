/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let stringArray = Array.from(s);
    
    let leftString = [];
    let sum = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        
        let rightString = [];
        
        let leftNumCnt = 0;
        let rightNumCnt = 0;
        
        leftString.push(stringArray[i]);
        
        for (let j = i + 1; j < s.length; j++) {
            rightString.push(stringArray[j]);
        }
        
        for (let k = 0; k < leftString.length; k++) {
            if (leftString[k] == 0)
                leftNumCnt += 1;
        }
        
        for (let y = 0; y < rightString.length; y++) {
            if (rightString[y] == 1)
                rightNumCnt += 1;
        }
        
        if (leftNumCnt + rightNumCnt > sum)
            sum = leftNumCnt + rightNumCnt;
    }
    
    return sum;
};
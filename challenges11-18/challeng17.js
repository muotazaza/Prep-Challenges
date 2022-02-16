'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:

const recursionPattern = (int1, int2) => {
    let ans= []
    let endpoint= false;
    const recursionPat = (int1, int2) => {

        ansArr.push(int1);
        if (int1 < 0) endpoint= true;
        if (a) {
            return ans;  }

        recursionPat(int1 - int2, int2);
        ansArr.push(int1);

        return ansArr;
    }
    return recursionPat(int1, int2);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:


const filterLinks = (str) => {
    let firstIdx = str.indexOf("www.");
    let lastregex = str.match(/"/g);
    let lastIdx = str.lastIndexOf(lastregex[0])
    return str.substring(firstIdx, lastIdx);

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:

const isPalindrome = (str) => {

    let tolower = str.toLowerCase();
    let readyArr;
    let a= /[a-z]/g;
    if (regex.test(tolower)) {
        readyArr = tolower.match(a);
    }
    else
        return (true);
    console.log(readyArr);
    readyArr = readyArr.join('');

    let j = readyArr.length - 1;

    for (let i = 0; i < j; i++) {
        if (readyArr[i] != readyArr[j])
            return false;
        j--;
    }
    return true;
}
module.exports = { recursionPattern, filterLinks, isPalindrome};

'use strict';

// Challenge 01:
// Required:


const wordLength = (str) => {
    let words = str.split(" "); 
    
     let midle=Math.ceil(words.length/2); 
     
    if(words.length%2==1)
    midle-=1; 
 
    let mWord= words[midle];
    
    return (mWord.length); 
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:

function setFrq(arr) {
    let frq = [];
    for (let i = 0; i < 30; i++)
        frq[i] = 0;

    return frq;

}
function charIdx(char) {
    return parseInt(char, 36) - 9;

}
function findFrq(str,frq)
{
    for(let i=0;i<str.length;i++)
    {
        frq[charIdx(str[i])]++;
    }
    return frq; 

}

const wordLetters = (str1, str2) => {
    let f=setFrq();
    let f2=setFrq();

    frqArr1=findFrq(str1,f);
    frqArr2=findFrq(str2,f2);


    for(let i=0; i<30;i++)
    if(f[i]!=f2[i])
    return false ;

    return true; }
module.exports = { wordLength, wordLetters};

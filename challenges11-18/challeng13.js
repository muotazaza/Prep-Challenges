'use strict';


const Counter=(obj) =>{
    let ans =obj.reduce(function (allElements){
        allElements++;
        return allElements;},0);
    return ans ;}

// 2) ---------------------

// ------------------------

const stringReverse = (str) => {
    let words=str.split(' '); 
    let ans=words.reduce((rev,char)=>char +" "+rev,'');
    return ans.substring(0,ans.length-1) ; }
// 3) ---------------------


const resultof = (obj) => {
    
    let votecounter = obj.reduce(function (candidates ,name) {
        if (name.votes_To in allNames) {
          candidates [name.votes_To]++
        }
        else {
          candidates [name.votes_To] = 1
        }
        return candidates 
      }, {})
      return votecounter  ;
}

export default { Counter, stringReverse, resultof };
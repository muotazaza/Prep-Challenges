// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reversestring = (str) => {
    let ans="" ;
    for(let i=str.length-1;i>=0;i--)
      ans=str[i]+ans;   
  
    console.log(ans);
    return ans; 
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const arrfilter= (arr) => {
    let o= /\^_\^/g  ; 
    let ans=[] ; 
    arr.forEach(str => {
        if(str.match(o))
        {ans.push(str);}   });
    return ans ; 
}


module.exports = { reversestring, arrfilter };
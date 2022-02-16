
   
'use strict';
// 1) ---------------------
const oddfilter= (arr) => {
    let a= arr.filter(number=>{return(number%2!=0)});
    return a; 
}
// 2) ---------------------

function FullName(firstName,lastName)
{
    if(fName === null )
        return lName; 
    else if(lName === null)
            return fName; 
    else
    return `${fName} ${lName}`; 
}
const filter=(arr) => {
    let ans =[]; 
    let w= arr.filter(o=>{
        if(o.yearsOfExperience>4 && o.tech=="JS")
        {
            ans.push ({fullName: FullName(o.firstName,o.LastName) ,tech: o.tech});

        }


    });

    return ans; 
}

// 3) ---------------------


const vowelsFilter = (arr) => {

    let unwanted= /[a,e,i,o,u]/gi;
    let filter=[];
        filter= arr.filter(item=>{ return !(item.match(unwanted)) ; }); 
    return filter;
} 

// 4) ---------------------


const skillComparisor = (first, second) => {

    let helpingArr1 = first.filter(item=>{

        return(!(second.includes(item)));
    });
    let helpingArr2 = second.filter(item=>{

        return(!(first.includes(item)));
    });
    
    let a=[].concat(helpingArr1,helpingArr2);

    return a; 
}

module.exports = { oddfilter, filter, vowelsFilter, skillComparisor };
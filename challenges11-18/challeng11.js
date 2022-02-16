'use strict';


function square (arr) {
    let arrsq = arr.map(number=>{
        number=(number*number); 
        return number ; 
    })
    return arrsq ;
}

// 2)

function mergename(arr){
    
    let name=arr.map(fullname=>{
        fullname =(`${fullname.firstName} ${fullname.lastName}`); 
        return fullname; 
    })
    return name ; 
}

// 3) 

function Avg_grade(arr) {
    arr["avg"]=0; 
    
    let togetsum =arr.map(numberofgrades=>{
        let sum =0; 
        let helpArr=numberofgrades.gradsList.map(mark=>{
            sum+=mark; 
            return sum ; 
        })
        numberofgrades.avg=(sum/numberofgrades.gradsList.length); 
        return numberofgrades ; 
    })
    return togetsum;
}


// 4) 


function faliorpass(arr) {
    
    arr["result"]=""; 

    let togetresult=arr.map(SR=>{
        
        if(SR.avg>=50)
        SR.result='Passed'; 
        else
        SR.result='Failed'; 
        return SR ;
        
    })
    return togetresult ;
}
module.exports = { square, mergename, Avg_grade, faliorpass };
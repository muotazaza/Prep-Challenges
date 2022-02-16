
// 1) ---------------------

const LastWord = (str) => {
    const lastSpace=str.lastIndexOf(" ");
    const ans = str.slice(lastSpace+1);
    return ans;
 }
 
 // 2) ---------------------
 // 
 //  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
 //
 //  EX: "you dare use my spells against me, potter" ===> "potter"
 //
 // ------------------------
 
 const LastWord2 = (a) => {
     const splittedstr = a.split(" ");
     return splittedstr[splittedstr.length-1]; 
 }
 
 // 3) ---------------------
 
 
 const replaceWords = (str) => {
     const splittedStr = str.split(" ");
     while(splittedStr.lastIndexOf('I')!= -1)
     {
         splittedStr.splice(splittedStr.lastIndexOf('I'),1,'We');
     }
 
     while(splittedStr.lastIndexOf('am')!= -1){
         splittedStr.splice(splittedStr.lastIndexOf('am'),1,'are');}
 
     while(splittedStr.lastIndexOf( 'was')!= -1){
         splittedStr.splice(splittedStr.lastIndexOf( 'was'),1,'were'); }
     let ansStr="";
     splittedStr.forEach(element => {
         ansStr+=element+" ";});
 
     return ansStr.substring(0,ansStr.length-1) ;
 }
 
 // 4) ---------------------
 
 
 const arrToStr = (arr) => {
     let ansArr="";
     for(let i=0;i<arr.length;i++){
         ansArr+=arr[i];
         if(i%4==0&&i!=0)
         ansArr+=", ";
         else
         ansArr+=" ";
     }
     return ansArr.substring(0,ansArr.length-1) ;
 
 }
 
 // 5) ---------------------
 
 const letterCounter = (str) => {
     let counter =1 ;
     let ans=[]
     for(let i=1;i<=str.length;i++)
     {
         if (counter == 0 )
         {
             if(str[i-1]==' ')
             {
                 ansArray+=' ';
                 counter=1 ;
                 continue;
             }
             else
             {counter=1;
             continue;
             }
         }
         if(str[i]==str[i-1])
         {  counter++;}
         else
         {
             ans+=str[i-1]+counter;
             if(str[i]==' ')
             counter=0; 
             else
             counter=1 ;   } }
     return ans;}
 
 
 
 module.exports = { LastWord, LastWord2, replaceWords, arrToStr, letterCounter };
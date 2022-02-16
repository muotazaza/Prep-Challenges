function processData(input) {
    let [numberElements, elements]=input.split("\n");
    let dataset=[];
    elements=elements.split(" ");
    elements.map((el)=>{
        const findElement=(element)=>{ return element.name===el;}
        if((index=dataset.findIndex(findElement))!==-1){
            dataset[index]['count']++;
        }else{
            dataset.push({name:el,count:1});
        }
    });
    let reducer=dataset.reduce((el1,el2)=>{
        return el1.count>el2.count?el1:el2;
    });
    console.log(numberElements-reducer.count);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


//2)
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function howManyGames(p, d, m, s) {
    let gamesAmount = 0;
    let lastPrice = p;

    while(s >= lastPrice) {
        lastPrice = p - gamesAmount * d;

        if (lastPrice <= m) {
            lastPrice = m;
        }

        s -= lastPrice;

        gamesAmount++;
    }

    return gamesAmount;
}

//3)
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    for(i=1;i<input.length;i++) {
        var temp = input[i].split(" ");
        j=1;
        ans = [];
        while ((j*j)<=temp[1]) {
            if ((j*j)>=temp[0]) {
                ans.push(j*j);
            }
            j++;
        }
        
        
        console.log(ans.length);
    }
    
    ;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});



function main() {
    var p_temp = readLine().split(' ');
    var p = parseInt(p_temp[0]);
    var d = parseInt(p_temp[1]);
    var m = parseInt(p_temp[2]);
    var s = parseInt(p_temp[3]);
    var answer = howManyGames(p, d, m, s);
    process.stdout.write("" + answer + "\n");

}


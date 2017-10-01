function processData(input) {
    //Enter your code here
    

input = input.split("\n")

    //console.log(input);
    for (var i = 1; i < input.length; i++){
       // console.log("9. ", input[i]);   
            var even=[], odd=[]
    for(var j = 0; j < input[i].length; j++){
        if(j % 2 ===0){
       even.push(input[i][j]);        
        }else{
            odd.push(input[i][j]);
        }
//  console.log(input[i][j])  
       }
    
          console.log(even.join("") +' '+ odd.join(""));
    }
    
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

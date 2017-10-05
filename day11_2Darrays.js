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

/////////////// ignore above this line ////////////////////

function main() {
  var arr = [];
  for(arr_i = 0; arr_i < 6; arr_i++){
  arr[arr_i] = readLine().split(' ');
  arr[arr_i] = arr[arr_i].map(Number);
  }
//console.log(arr)
    var max = -63
    for(var i=0; i< 4; i++){
        for(var j=0; j< 4; j++){
            var currentSum=totalSum(i, j);
                    if (currentSum> max){
//            console.log(max = totalSum(i, j));
               max = currentSum;
        }            
    }

    }
    
    function totalSum(a, b ){
        var sum = arr[a][b]+arr[a][b+1]+arr[a][b+2]+
            arr[a+1][b+1]+
            arr[a+2][b]+arr[a+2][b+1]+arr[a+2][b+2];
 
        return sum;
    }
    
     console.log(max);

}


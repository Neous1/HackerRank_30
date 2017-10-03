function processData(input) {
    var phoneBook = {};
    var nArr = [];
  
    input = input.split('\n');
  
    for (var i = 1; i <= input[0]; i++) {
      var nArr = input[i].split(' ');
      var name = nArr[0];
      var number = parseInt(nArr[1]);
  
      phoneBook[name] = number;
    }
  
    var init = parseInt(input[0]) + 1;
    //console.log(init);
  
    for (var j = init; j < input.length; j++) {
      //console.log("18 . "+input[0]+1)
      if (phoneBook.hasOwnProperty(input[j])) {
        console.log(input[j] + '=' + phoneBook[input[j]]);
      } else {
        console.log('Not found');
      }
  
      // console.log("21. ", phoneBook.hasOwnProperty(input[j]))
    }
  
    //console.log(phoneBook);
    //console.log("hello")
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
  
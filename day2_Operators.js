'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
        // Write your code here
var totalCost;
 tipPercent = mealCost * tipPercent/100;
 taxPercent = mealCost * taxPercent/100;
//tipPercent = mealCost(tip/100)
totalCost = Math.round(mealCost +tipPercent + taxPercent);
//console.log(mealCost 12 , tipPercent 20  , taxPercent 8)
//console.log("tip is ", tipPercent)
//console.log("taxPercent is ", taxPercent)

    // Use console.log() to print to stdout
console.log("The total meal cost is " +totalCost+ " dollars.")

//find and print the meal's total cost.
}
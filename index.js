// for loop
var musicians = ['John Lennon'];
var musicians_length = musicians.lenght

var instruments = ['Guitar'];
var intruments_length = instruments.lenght;

function theBeatlesPlay (musicians, instruments) {

	const newarray = [];
	for (var i = 0; i < musicians_length; i++) {
		var output = musicians[i] + "plays the " + instruments[0]
		newarray.push(output);

		

	}

	return newarray	
}

// while loop

const facts = 
["He was the last Beatle to learn to drive", 
"He was never a vegetarian",
 "He was a choir boy and a boy scout", 
 "He hated the sound of his own voice"];
 var y = 0;


function johnLennonFacts (facts) {
	while (y < facts.length) {
		y++;
		console.log(facts[y] + "!!!");
	}


}

// do while 
function iLovetheBeatles(n) {
	const array = [];

	do {
		array.push("I love the Beatles!")
		n++
	} while(n < 15)

	return array

}




var hands = ['rock', 'paper', 'scissors'];
​
function getHand(){
  return hands [parseInt(Math.random()*10)%3];
}
​
var player1 = {
 	name: "Jude",
 	hand: getHand()
}
​
var player2 = {
 	name: "Lee",
 	hand: getHand()
}
​
function playRound(player1, player2){
 	player1.hand();
 	player2.hand();

  ​ if ((player1.hand === 0 && player2.hand === 2) ||
    (player1.hand === 1 && player2.hand === 0) ||
    (player1.hand === 2 && player2.hand === 2)) {
      console.log( player1.name + " wins");
    }   else {
      console.log( player2.name + " wins");
    }
}







// // We need to separate these into 2 functions
// if (p1Choice === p2Choice){
// 		console.log("You tied play again!");
//  		 return nil;
//  	} else if p1Choice === 0 && p2Choice === 1){
//  		console.log("Paper covers rock! " + player2.name + " wins");
//  		return player2;
//  	} else if p1Choice === 0 && p2Choice === 2){
//  		console.log("Rock smashes scissors! " + player1.name + " wins");
//  		return player1;
//  	} else if p1Choice === 1 && p2Choice === 0){
//  		console.log("Paper covers rock! " + player1.name + " wins");
//  		return player1;
//  	} else if p1Choice === 1 && p2Choice === 2){
//  		console.log("Scissors cuts paper! " + player2.name + " wins");
//  		return player2;
//  	} else if p1Choice === 2 && p2Choice === 0){
//  		console.log("Rock smashes scissors! " + player2.name + " wins");
//  		return player2;
//  	} else if p1Choice === 2 && p2Choice === 1){
//  		console.log("Scissors cuts paper! " + player1.name + " wins");
//  		return player1;
//  	}
// }
// ​
​
​
// console.log(playRound(player1, player2));
​
// ​
// function outer(){
// 	var a = "Lee";
// 	var b = {
// 		key: "value"
// 	};
// 	console.log(a)
// 	console.log(b)
// 	function inner(a,b){
// 		var a = "Jude"
// 		var v = {}
// 		b.name = "Assaf"
// 		console.log(a)
// 		console.log(b)
// 	}
// ​
// 	inner(a,b);
// 	console.log(a,b)
// }
// ​
// outer();
// ​
// function(obj) {
// 	//do stuff to object
// 	obj.newVal = "abc";
// }
// ​
// ​

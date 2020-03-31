var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var suits = ["clubs", "diamonds", "spades", "hearts"];
var deck = [];

suits.forEach(function(suit) {
  ranks.forEach(function(rank){
  	deck.push(rank + " of " + suit);
  });
});

deck.forEach(function(card) {
	console.log(card);
});

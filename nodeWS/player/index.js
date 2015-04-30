var events = require('events');
var util = require('util');
util.inherits(Player,events.EventEmitter);

var messageConsole = "";
// Player Object Constructor
function Player(){
	this.CurrentGamePoint = 0;
	events.EventEmitter.call(this);
}
// ploayer objects Prototypes
// adding points
Player.prototype.goodPoints = function (points){
	this.CurrentGamePoint += points;
	console.log("+" + points);
	messageConsole += "+" + points + "\n"; 
	this.emit('pointsHasChanged');
}
//taking points
Player.prototype.badPoints = function (points){
	if(this.CurrentGamePoint - points < 0){
		this.CurrentGamePoint = 0;
		this.emit('pointsHasChanged');
	}
	else{
		this.CurrentGamePoint -= points;
		console.log("-" + points);
		messageConsole += "-" + points + "\n"; 
		this.emit('pointsHasChanged');
	}
}
//sum of points
Player.prototype.displayPoints = function() {
	if(this.CurrentGamePoint > 0) {
		console.log("Player points balance :" + this.CurrentGamePoint);
		messageConsole += "Player points balance :" + this.CurrentGamePoint + "\n"; 

	}
	else if(this.CurrentGamePoint <= 0) {
			console.log("No points! Better Luck next time :" + this.CurrentGamePoint);
			messageConsole += "No points! Better Luck next time :" + this.CurrentGamePoint + "\n"; 
	}
}

Player.prototype.showMessage = function(){
	return messageConsole;
}

module.exports = Player;
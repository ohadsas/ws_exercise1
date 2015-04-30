var Player = require('./player');
var http = require('http');

http.createServer(function(req, res){
res.writeHead(200);// status code 200= ok
res.write(playerOne.showMessage());
res.end();
}).listen(8080);
console.log("listen to port 8080");

 
var playerOne = new Player();
//Callbacks
playerOne.on("pointsHasChanged",playerOne.displayPoints);


playerOne.goodPoints(2);
playerOne.badPoints(3);
playerOne.goodPoints(4);
// playerOne.goodPoints(5);
//player.BadPoints(6);
//player.goodPoints(1);

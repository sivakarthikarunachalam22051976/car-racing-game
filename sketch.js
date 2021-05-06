var canvas,backgroundImg;
var gameState=0;
var playerCount;
var database;
var form,player,game;
var allplayers;

function setup () {
canvas=createCanvas(200,200)
database=firebase.database();

game=new Game()
game.getState()
game.start()
}

function draw(){
if(playerCount===4){
    game.update(1)
}
if(gameState===1){
    clear()
    game.play()
}
}
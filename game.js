class Game{
    constructor(){}

    getState(){
        var gameStateREF=database.ref('gameState')
        gameStateREF.on("value",function(data){
         gameState=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref('playerCount').once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            
            form=new Form()
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",400,130);
        player.getPlayerInfo()

        if(allplayers!==undefined){
            var displayPosition=130
            for(var plr in allplayers){
                if(plr==="player"+player.index)
                  fill("red")
                else
                  fill("black")
            
                displayPosition+=20
                textSize(15)
                text(allplayers[plr].name+": "+allplayers[plr].distance,120,displayPosition)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50
            player.update()
        }
    }
}
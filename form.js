class Form{
     
 constructor(){
     this.input=createInput("Name")
     this.button=createButton('Play')
     this.Greeting=createElement('h2')
 }

 hide(){
     this.Greeting.hide();
     this.button.hide();
     this.input.hide();
 }
 
 display(){
     var title=createElement('h2')
     title.html("Car Racing Game")

     title.position(400,50)
     this.input.position(410,120)
     this.button.position(450,180)


     this.button.mousePressed(()=>{
         this.input.hide()
         this.button.hide()
         player.name = this.input.value()
         playerCount+=1
         player.index=playerCount
         player.update()
         player.updateCount(playerCount)
         this.Greeting.html("Hello "+player.name)
         this.Greeting.position(450,130)
     })
 }










}
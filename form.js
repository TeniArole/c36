class Form {
    constructor(){} 
    
    display(){
       //creating the title
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130, 0)

        //creating the input box
        var input = createInput("Name")
        input.position(130, 160)

        //creating the button
        var button = createButton("Play!")
        button.position(250, 200)

        //once the button is pressed
        button.mousePressed(function(){
            input.hide()
            button.hide()
            
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
           
            greeting.html("Hello" + name)
            greeting.position(130, 160)
    
        })

        

        //creating the greeting
        var greeting = createElement('h3')


    }
    
}
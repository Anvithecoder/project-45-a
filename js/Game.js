class Game {
    constructor() {

    }
    start() {

        form = new Form()
        form.display()
        blackHat=createSprite(939,503,50,50)
        paintingtool=createSprite(238,632,50,50)
       miror =createSprite(615,284,50,50)
        eifletower=createSprite(830,290,50,50)
        sofa=createSprite(742,488,50,50)
        magnet=createSprite(1074,550,50,50)
        purse=createSprite(524,650,50,50)
        snail=createSprite(179,244,50,50)
        tie=createSprite(198,427,50,50)
        tape=createSprite(122,682,50,50)
        clock=createSprite(266,311,50,50)

    }
    play(){
    if(blackHat.mouseIsPressed){
        bhalert()
        blackHat.destroy()
    }



    drawSprites()
    }
    bhalert(){
        swal({
            title:"Black Hat Collected ",
            icon:"success"
        })
    }
}
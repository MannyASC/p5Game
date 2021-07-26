//vars
let tree;
let winTree
let apple1;
let apple2;
let basket;
let gapple;
let vicDance
let vicDance2

let ding;
let splat;
let power;
let victory;
let go;


let falling=0;
let falling2=0;
let falling3=-60;

let randomX= (Math.random()*450);
let randomX2= (Math.random()*450);
let randomX3= (Math.random()*450);

let Xpos=250;
let Ypos = 425;

let myLeft, myRight, myTop;
let  ABottom, ALeft, ARight;
let  ABottom2, ALeft2, ARight2;
let  ABottom3, ALeft3, ARight3;

let aCounter=0;

let score=0;
let state=1;

//images and sounds
function preload(){
    winTree=(loadImage('images/image.gif'))
    tree=loadImage('images/tree.jpg');
    apple1=loadImage('images/apple1.png');
    apple2=loadImage('images/apple2.png');
    basket= loadImage('images/basket.png');
    gapple=loadImage('images/gapple.gif');
    vicDance=loadImage('images/dance.gif')
    vicDance2=loadImage('images/dance.gif')

    ding=loadSound('sound/ding.mp3');
    splat =loadSound('sound/splat.mp3');
    victory=loadSound('sound/victory.mp3');
    go =loadSound('sound/go.mp3');
    power =loadSound('sound/power.mp3');

}
//basic setup
function setup() {
    createCanvas(500,500);
    background(0);
    noStroke();
    


}

function draw(){
    //actual gameplay
    if (state==1){
        //background
        image(tree,0,0,500,500);
        
        //text
        fill(random(255), random(255), random(255));
        textSize(22);
        text('Collect Apples!',0,20);
        text('Dont Let Them Splat!',0,45);
        text('40 to win',0,70);
        
        fill(0,255,255);
        text('score:',380,20);
        text(score,460,20)
       
       //movement
        if(keyIsDown(LEFT_ARROW)){
            Xpos -= 6.5;
        }
        
        
        if(keyIsDown(RIGHT_ARROW)){
            Xpos += 6.5;
        }
        
        
        if(Xpos > 430){
            Xpos -= 25;
        }
       
       
        if(Xpos < 0){
            Xpos += 25;
        }
        //apple speed/tracker
        falling +=5
        
        
        if (falling>500){
            falling=0;
            randomX= (Math.random()*450);
            score-=1;
            splat.play();
        }
        falling2 +=6.5
        
        
        if (falling2>500){
            falling2=0;
            randomX2= (Math.random()*450);
            score-=1;
            splat.play();
        }
        //images
        image(apple1,randomX,falling,50,50);
        image(apple2,randomX2,falling2,50,50);
        image(gapple,randomX3,falling3,50,50)

        
        image(basket,Xpos, Ypos, 80,70);
    
        //basket border
        myLeft = Xpos;
        myRight = Xpos + 80;
        myTop = Ypos;
       
    
        //apple 1 and 2 borders
        ABottom= falling+50;
        ALeft= randomX;
        ARight= randomX+50;
        
        ABottom2= falling2;
        ALeft2= randomX2;
        ARight2= randomX2+50;
        
        ABottom3= falling3;
        ALeft3= randomX3;
        ARight3= randomX3+50;
        
       //collection tracker
        if (myTop<ABottom && myLeft<ARight && myRight>ALeft){
           falling=0;
           randomX= (Math.random()*450);
           score ++;
           ding.play();
           aCounter++
       }
       if (myTop<ABottom2 && myLeft<ARight2 && myRight>ALeft2){
        falling2=0;
        randomX2= (Math.random()*450);
        score ++;
        ding.play();
        aCounter++
       }
        if (myTop<ABottom3 && myLeft<ARight3 && myRight>ALeft3){
            falling3=-60;
            randomX3= (Math.random()*450);
            score +=3;
            power.play();
            aCounter=0;
        }
       
       if (aCounter>8&&aCounter<12){
           falling3 +=10;
           if(falling3>500){
            aCounter=0;
            falling3=-60;
            score-=3;
            randomX3= (Math.random()*450);
            splat.play();
        }
       }
       
        
           

    
       //victory
       if (score>=40){
           state=2;
           victory.play();
       }

    }  

    
    
    //win screen
     if(state==2) { 
        rectMode(CENTER)
        image(winTree,0,0,500,500);
        image(vicDance,0,0,250,200)
        image(vicDance,250,0,250,200)
        
        image(gapple, 150,300,200,200)
        image(apple1, 0,300,150,200)
        image(apple2, 340,300,150,200)
        textSize(72);
        fill(random(255), random(255), random(255));
        text("Victory!",140,150);
        
        fill(50,50,50);
        rect(250,250,100,50);
        
        fill(255);
        textSize(15);
        text('Play Again',215,250);

        
    }
    

    
}
function mouseClicked(){
    //play again 
    if (state==2){
        if (mouseX>200 && mouseX<300 && mouseY>225 && mouseY<275){
            
            score=0;
            state=1;
            aCounter=0;
            falling3=-60
            
        }
        if (mouseX>150 && mouseX<350 && mouseY>300 && mouseY<500){
            power.play()
        
            
        
        }
    }

}


    

  



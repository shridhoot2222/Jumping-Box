var canvas;
var music,edges;
var wall1,wall2,wall3,wall4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    wall1= createSprite(75,580,135,10);
    wall1.shapeColor="blue";

    wall2= createSprite(225,580,135,10);
    wall2.shapeColor="yellow";

    wall3= createSprite(375,580,135,10);
    wall3.shapeColor="red";

    wall4= createSprite(525,580,135,10);
    wall4.shapeColor="purple";  


    //create box sprite and give velocity
    box=createSprite(random(50,550),100,30,30);
    box.shapeColor="white";
    box.velocityX=-2;
    box.velocityY=4;
    
   music.play();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges); 

    //add condition to check if box touching surface and make it box
    if(wall1.isTouching(box) && box.bounceOff(wall1)){
       box.shapeColor="blue";
    }
    if(wall2.isTouching(box)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(wall3.isTouching(box) && box.bounceOff(wall3)){
        box.shapeColor="red";
    }
    if(wall4.isTouching(box) && box.bounceOff(wall4)){
        box.shapeColor="purple";
    }

   drawSprites();
}

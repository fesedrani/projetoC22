var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairySound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fairySound = loadSound("sound/JoyMusic.mp3")

}

function setup() {
    createCanvas(800, 750);

    fairySound.play();

    fairy = createSprite(400,570);
    fairy.addAnimation("fairyasas", fairyImg);
    fairy.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.rectangle(650,30,50,50, {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Engine.run(engine);

}
function draw(){
    background(bgImg);
    star.x= starBody.position.x 
    star.y= starBody.position.y 
    if(keyCode === DOWN_ARROW){
        Matter.Body.setStatic(starBody,false);
    }
    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }
    if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x+10;
		
	}
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x-10;
	}
    drawSprites();
}
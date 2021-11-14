var player;
var monster;
var spike1, spike2;
var gameOver;
var coin;
var life1, life2, life3;
var playerImg, monsterImg, trap1, trap2;
var bg
var bgImg
var invisibleGround;

function preload() {
playerImg = loadAnimation("player1.png","player2.png","player3.png","player4.png","player5.png","player6.png","player7.png","player8.png");
monsterImg = loadImage("Monster1.png");
trap1 = loadImage("spike1.png");
trap2 = loadImage("spike2.png");
gameOver = loadImage("gameOver.png");
bgImg = loadImage("Background.png");
coinImg = loadImage("Coin.png");
lifeImg = loadImage("life.png");
};

function setup() {
  createCanvas(950,600);
  player = createSprite(600, 540, 50, 50);
  player.addAnimation("running",playerImg);
  player.scale = 1;
  monster = createSprite(100, 410, 50, 50);
  monster.addImage(monsterImg);
  monster.scale = 0.7;
  spike1 = createSprite(2350, 550, 50, 50);
  spike1.scale = 0.1;
  spike1.addImage(trap1);
  spike1.velocityX  = -9.7;
  spike2 = createSprite(3350, 110, 50, 50);
  spike2.scale = 0.9;
  spike2.addImage(trap2);
  spike2.velocityX  = -15;
  life1 = createSprite(100, 70, 50, 50);
  life1.scale = 0.1;
  life1.addImage(lifeImg);
  life2 = createSprite(200, 70, 50, 50);
  life2.scale = 0.1;
  life2.addImage(lifeImg);
  life3 = createSprite(300, 70, 50, 50);
  life3.scale = 0.1;
  life3.addImage(lifeImg);
  invisibleGround = createSprite(420,584, 1000, 1);
  invisibleGround.visible = false;
  bg = createSprite(630, 300, 50, 50);
  bg.addImage(bgImg);
}

function draw() { 
  monster.depth = 3;
  spike1.depth = 2;
  player.depth = 3;
  bg.depth = 1;
  bg.velocityX = -10;
  textSize(30);
  text("press space to jump & avoid obstactles", 350, 370);
  player.collide(invisibleGround);
  if (bg.x < -860) {
    bg.x = 670;
    }
    if (spike1.x < -860) {
      spike1.x = 950;
      }
      if (spike2.x < -960) {
        spike2.x = 1150;
        }
      if((keyDown("space")&& player.y >= 160)) {
        player.velocityY = -14;
      }
      player.velocityY = player.velocityY + 0.8;
      if (player.isTouching(spike1)) {
        spike1.x = -850;
        player.x = player.x - 150;
      }
      if (player.x < 460) {
        life3.visible = false
      };
      if (player.x < 310) {
        life2.visible = false
      };
      if (player.x < 160) {
        life1.visible = false
      };
  drawSprites();
};

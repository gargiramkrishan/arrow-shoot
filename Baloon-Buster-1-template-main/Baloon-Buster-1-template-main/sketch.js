var bg,bag,arrow,arr,bal,ball,bal2,ball2,bal3,ball3,bal4,ball4,sac,sa,hhm,hhm2,hhm3,hhm4

function preload(){
  bag = loadAnimation("background0.png")
  arr = loadAnimation("bow0.png")
  ball = loadImage("blue_balloon0.png")
  ball2 = loadImage("green_balloon0.png")
  ball3 = loadImage("red_balloon0.png")
  sa = loadImage("arrow0.png")
}



function setup() {
  createCanvas(900,900);
  bg = createSprite(400,400)
  bg.addAnimation("fgm",bag)
  arrow = createSprite(560,400)
  arrow.addAnimation("jv",arr)
  bal = createSprite(300,600)
  bal.scale = 0.1
  bal.addAnimation("jjjg",ball)
  sac = createSprite(arrow.x,arrow.y)
  sac.scale = 0.4
  sac.addAnimation("ggg",sa)
  hhm = createSprite(200,400,10,809)
  hhm.visible = false;
  hhm2 = createSprite(400,600,809,10)
  hhm2.visible = false;
  hhm3 = createSprite(400,200,809,10)
  hhm3.visible = false;
  hhm4 = createSprite(600,400,10,809)
  hhm4.visible = false;
}

function draw() {
  background("white")
  arrow.collide(hhm2)
  arrow.collide(hhm3)
  arrow.collide(hhm4)
  if(sac.x < 250)
  {
    sac.x = arrow.x
    sac.y = arrow.y
  }
  if(keyDown("space"))
  {
    sac.x = sac.x - 6;

  }
  if(keyDown("Up"))
  {
    arrow.y = arrow.y - 8
    sac.x = arrow.x
    sac.y = arrow.y
  }
  if(keyDown("Down"))
  {
    arrow.y = arrow.y + 8
    sac.x = arrow.x
    sac.y = arrow.y
  }
  bal.x = bal.x + 4
  bal.lifetime = 5
  console.log(bal.x)

  ballonj();
  drawSprites();
}
function ballonj()
{
  if(frameCount%70==0)
  {
    bal = createSprite(300,600)
    bal.scale = 0.1
    bal.lifetime = 5
    bal.y = Math.round(random(300,600))

    bal.x = bal.x + 4
    hhhhhhhhhhhhhhhhhhh = Math.round(random(1,3))
    switch(hhhhhhhhhhhhhhhhhhh)
    {
      case 1 : bal.addImage(ball)
      break
      case 2 : bal.addImage(ball2)
      break
      case 3 : bal.addImage(ball3)
      break
      default:
        break
    }
  }
}
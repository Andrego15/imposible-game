var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b3d792ce-9778-426d-8d87-e3d276c063c6"],"propsByKey":{"b3d792ce-9778-426d-8d87-e3d276c063c6":{"name":"car","sourceUrl":null,"frameSize":{"x":28,"y":53},"frameCount":1,"looping":true,"frameDelay":12,"version":"RUNoOyAJezpxc_HKjGB.BDFYaU21_Osv","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":53},"rootRelativePath":"assets/b3d792ce-9778-426d-8d87-e3d276c063c6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var meta= createSprite(375,200,50,100);
meta.shapeColor= (rgb(200,255,255));
var player = createSprite(50,200,20,20);
var line1 = createSprite(200,50,400,5);
var line2 = createSprite(200,346,400,5);
var car1 = createSprite(100,200,25,25);
var car2 = createSprite(175,200,25,25);
var car3 = createSprite(250,200,25,25);
var car4 = createSprite(325,200,25,25);
var intentos = 0;
car1.velocityY = 8;
car2.velocityY = -8;
car3.velocityY = 8;
car4.velocityY =-8;

function draw (){
  background("white");
  
  createEdgeSprites();
  
drawSprites();  

if (keyDown("right")){
player.x = player.x + 4  ;
}
if (keyDown("left")){
player.x = player.x - 4  ;
}

if (player.isTouching(car1)){
  intentos = intentos+1;
  player.x = 50;
}

if (player.isTouching(car2)){
  intentos = intentos+1;
  player.x = 50;
}

if (player.isTouching(car3)){
  intentos = intentos+1;
  player.x = 50;
}

if (player.isTouching(car4)){
intentos = intentos+1;
  player.x = 50;
}



car1.setAnimation("car");

car2.setAnimation("car");

car3.setAnimation("car");

car4.setAnimation("car");

car1.bounceOff(line1);
car1.bounceOff(line2);

car2.bounceOff(line1);
car2.bounceOff(line2);

car3.bounceOff(line1);
car3.bounceOff(line2);

car4.bounceOff(line1);
car4.bounceOff(line2);

textSize(20);

text (intentos,200,25);


if (player.isTouching(meta)){

player.x = 375;
  text("ganaste",170,375);
}
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

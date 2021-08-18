var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var b1 = createSprite(185,300,100,380);
var b2 = createSprite(10,300,50,230);
var b3 = createSprite(345,300,150,360);
var b4 = createSprite(250,300,40,200);
var b5 = createSprite(50,275,35,250);
var b6 = createSprite(85,300,35,230);
var b7 = createSprite(119,300,35,350);
var box1 = createSprite(155,220,25,25);
var box2 = createSprite(215,220,25,25);
var box3 = createSprite(185,220,25,25);
var box4 = createSprite(155,250,25,25);
var box5 = createSprite(215,250,25,25);
var box6 = createSprite(185,250,25,25);
var box7 = createSprite(155,190,25,25);
var box8 = createSprite(215,190,25,25);
var box9 = createSprite(185,190,25,25);
var box10 = createSprite(155,160,25,25);
var box11 = createSprite(215,160,25,25);
var box12 = createSprite(185,160,25,25);
var box13 = createSprite(155,130,25,25);
var box14 = createSprite(215,130,25,25);
var box15 = createSprite(185,130,25,25);
var box16 = createSprite(155,280,25,25);
var box17 = createSprite(215,280,25,25);
var box18 = createSprite(185,280,25,25);
var box19 = createSprite(155,310,25,25);
var box20 = createSprite(215,310,25,25);
var box21 = createSprite(185,310,25,25);
var box22 = createSprite(155,343,25,28);
var box23 = createSprite(215,343,25,28);
var box24 = createSprite(185,343,25,28);
var box25 = createSprite(155,380,25,35);
var box26 = createSprite(215,380,25,35);
var box27 = createSprite(185,380,25,35);
var box28 = createSprite(290,200,25,25);
var box29 = createSprite(320,200,25,25);
var box30 = createSprite(350,200,25,25);
var box31 = createSprite(380,200,25,25);
var box32 = createSprite(290,230,25,25);
var box33 = createSprite(320,230,25,25);
var box34 = createSprite(350,230,25,25);
var box35 = createSprite(380,230,25,25);
var box36 = createSprite(290,260,25,25);
var box37 = createSprite(320,260,25,25);
var box38 = createSprite(350,260,25,25);
var box39 = createSprite(380,260,25,25);
var box40 = createSprite(290,290,25,25);
var box41 = createSprite(320,290,25,25);
var box42 = createSprite(350,290,25,25);
var box43 = createSprite(380,290,25,25);
var box44 = createSprite(290,320,25,25);
var box45 = createSprite(320,320,25,25);
var box46 = createSprite(350,320,25,25);
var box47 = createSprite(380,320,25,25);
var box48 = createSprite(290,350,25,25);
var box49 = createSprite(320,350,25,25);
var box50 = createSprite(350,350,25,25);
var box51 = createSprite(380,350,25,25);
var box52 = createSprite(290,380,25,25);
var box53 = createSprite(320,380,25,25);
var box54 = createSprite(350,380,25,25);
var box55 = createSprite(380,380,25,25);
var box56 = createSprite(290,170,25,25);
var box57 = createSprite(320,170,25,25);
var box58 = createSprite(350,170,25,25);
var box59 = createSprite(380,170,25,25);
var box60 = createSprite(290,140,25,25);
var box61 = createSprite(320,140,25,25);
var box62 = createSprite(350,140,25,25);
var box63 = createSprite(380,140,25,25);
var box64 = createSprite(110,135,15,15);
var box65 = createSprite(110,155,15,15);
var box66 = createSprite(110,175,15,15);
var box67 = createSprite(110,195,15,15);
var box68 = createSprite(110,215,15,15);
var box69 = createSprite(110,235,15,15);
var box70 = createSprite(110,255,15,15);
var box71 = createSprite(110,275,15,15);
var box72 = createSprite(110,295,15,15);
var box73 = createSprite(110,315,15,15);
var box74 = createSprite(110,335,15,15);
var box75 = createSprite(110,355,15,15);
var box76 = createSprite(110,375,15,15);
var box77 = createSprite(130,135,15,15);
var box78 = createSprite(130,155,15,15);
var box79 = createSprite(130,175,15,15);
var box80 = createSprite(130,195,15,15);
var box81 = createSprite(130,215,15,15);
var box82 = createSprite(130,235,15,15);
var box83 = createSprite(130,255,15,15);
var box84 = createSprite(130,275,15,15);
var box85 = createSprite(130,295,15,15);
var box86 = createSprite(130,315,15,15);
var box87 = createSprite(130,335,15,15);
var box88 = createSprite(130,355,15,15);
var box89 = createSprite(130,375,15,15);
var box90 = createSprite(110,395,15,15);
var box91 = createSprite(130,395,15,15);
var box92 = createSprite(40,160,15,15);
var box93 = createSprite(40,180,15,15);
var box94 = createSprite(40,200,15,15);
var box95 = createSprite(40,220,15,15);
var box96 = createSprite(40,240,15,15);
var box97 = createSprite(40,260,15,15);
var box98 = createSprite(40,280,15,15);
var box99 = createSprite(40,300,15,15);
var box100 = createSprite(40,320,15,15);
var box101 = createSprite(40,340,15,15);
var box102 = createSprite(40,360,15,15);
var box103 = createSprite(40,380,15,15);
var box104 = createSprite(40,400,15,15);
var box105 = createSprite(60,160,15,15);
var box106 = createSprite(60,180,15,15);
var box107 = createSprite(60,200,15,15);
var box108 = createSprite(60,220,15,15);
var box109 = createSprite(60,240,15,15);
var box110 = createSprite(60,260,15,15);
var box111 = createSprite(60,280,15,15);
var box112 = createSprite(60,300,15,15);
var box113 = createSprite(60,320,15,15);
var box114 = createSprite(60,340,15,15);
var box115 = createSprite(60,360,15,15);
var box116 = createSprite(60,380,15,15);
var box117 = createSprite(60,400,15,15);
var box118 = createSprite(250,220,25,25);
var box119 = createSprite(250,250,25,25);
var box120 = createSprite(250,280,25,25);
var box121 = createSprite(250,310,25,25);
var box122 = createSprite(250,343,25,30);
var box123 = createSprite(250,380,25,35);
var box124 = createSprite(85,200,25,25);
var box125 = createSprite(85,230,25,25);
var box126 = createSprite(85,260,25,25);
var box127 = createSprite(85,290,25,25);
var box128 = createSprite(85,320,25,25);
var box129 = createSprite(85,350,25,25);
var box130 = createSprite(85,380,25,25);
var box131 = createSprite(16,200,25,25);
var box132 = createSprite(16,230,25,25);
var box133 = createSprite(16,260,25,25);
var box134 = createSprite(16,290,25,25);
var box135 = createSprite(16,320,25,25);
var box136 = createSprite(16,350,25,25);
var box137 = createSprite(16,380,25,25);


b1.shapeColor="Black"
b2.shapeColor="Black"
b3.shapeColor="Black"
b4.shapeColor="Black"
b6.shapeColor="Black"
box1.shapeColor="White"
box2.shapeColor="White"
box3.shapeColor="White"
box4.shapeColor="White"
box5.shapeColor="White"
box6.shapeColor="White"
box7.shapeColor="White"
box8.shapeColor="White"
box9.shapeColor="White"
box10.shapeColor="White"
box11.shapeColor="White"
box12.shapeColor="White"
box13.shapeColor="White"
box14.shapeColor="White"
box15.shapeColor="White"
box16.shapeColor="White"
box17.shapeColor="White"
box18.shapeColor="White"
box19.shapeColor="White"
box20.shapeColor="White"
box21.shapeColor="White"
box22.shapeColor="White"
box23.shapeColor="White"
box24.shapeColor="White"
box25.shapeColor="White"
box26.shapeColor="White"
box27.shapeColor="White"
box28.shapeColor="White"
box29.shapeColor="White"
box30.shapeColor="White"
box31.shapeColor="White"
box32.shapeColor="White"
box33.shapeColor="White"
box34.shapeColor="White"
box35.shapeColor="White"
box36.shapeColor="White"
box37.shapeColor="White"
box38.shapeColor="White"
box39.shapeColor="White"
box40.shapeColor="White"
box41.shapeColor="White"
box42.shapeColor="White"
box43.shapeColor="White"
box44.shapeColor="White"
box45.shapeColor="White"
box46.shapeColor="White"
box47.shapeColor="White"
box48.shapeColor="White"
box49.shapeColor="White"
box50.shapeColor="White"
box51.shapeColor="White"
box52.shapeColor="White"
box53.shapeColor="White"
box54.shapeColor="White"
box55.shapeColor="White"
box56.shapeColor="White"
box57.shapeColor="White"
box58.shapeColor="White"
box59.shapeColor="White"
box60.shapeColor="White"
box61.shapeColor="White"
box62.shapeColor="White"
box63.shapeColor="White"
box64.shapeColor="Black"
box65.shapeColor="Black"
box66.shapeColor="Black"
box67.shapeColor="Black"
box68.shapeColor="Black"
box69.shapeColor="Black"
box70.shapeColor="Black"
box71.shapeColor="Black"
box72.shapeColor="Black"
box73.shapeColor="Black"
box74.shapeColor="Black"
box75.shapeColor="Black"
box76.shapeColor="Black"
box77.shapeColor="Black"
box78.shapeColor="Black"
box79.shapeColor="Black"
box80.shapeColor="Black"
box81.shapeColor="Black"
box82.shapeColor="Black"
box83.shapeColor="Black"
box84.shapeColor="Black"
box85.shapeColor="Black"
box86.shapeColor="Black"
box87.shapeColor="Black"
box88.shapeColor="Black"
box89.shapeColor="Black"
box90.shapeColor="Black"
box91.shapeColor="Black"
box92.shapeColor="Black"
box93.shapeColor="Black"
box94.shapeColor="Black"
box95.shapeColor="Black"
box96.shapeColor="Black"
box97.shapeColor="Black"
box98.shapeColor="Black"
box99.shapeColor="Black"
box100.shapeColor="Black"
box101.shapeColor="Black"
box102.shapeColor="Black"
box103.shapeColor="Black"
box104.shapeColor="Black"
box105.shapeColor="Black"
box106.shapeColor="Black"
box107.shapeColor="Black"
box108.shapeColor="Black"
box109.shapeColor="Black"
box110.shapeColor="Black"
box111.shapeColor="Black"
box112.shapeColor="Black"
box113.shapeColor="Black"
box114.shapeColor="Black"
box115.shapeColor="Black"
box116.shapeColor="Black"
box117.shapeColor="Black"
box118.shapeColor="White"
box119.shapeColor="White"
box120.shapeColor="White"
box121.shapeColor="White"
box122.shapeColor="White"
box123.shapeColor="White"
box124.shapeColor="White"
box125.shapeColor="White"
box126.shapeColor="White"
box127.shapeColor="White"
box128.shapeColor="White"
box129.shapeColor="White"
box130.shapeColor="White"
box131.shapeColor="White"
box132.shapeColor="White"
box133.shapeColor="White"
box134.shapeColor="White"
box135.shapeColor="White"
box136.shapeColor="White"
box137.shapeColor="White"



function draw() {
  background("Skyblue");
  drawSprites()
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

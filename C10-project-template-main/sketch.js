var btn_red;
var btn_green;

var r = 255;
var g = 0;
var b =0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createbutton("RED");
  btn_red.position(100,50);
  btn_red.moudepressed(red_bg);
  
  btn_green = createbutton("GREEN")
  btn_green.position(250,50);
  btn_green.moudepressed(green_bg);
}

function draw() {
  background(r,g,b);
  r = 255;
  g = 0;
  b =0;
}

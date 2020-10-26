//Bouncing DVD Logo
//Ben Martin 2020
//https://github.com/ben-boy

let x, y;

let xVelocity = 4;
let yVelocity = 3;

let img;

function setup() 
{
	createCanvas(400, 400);

	img = loadImage("https://cdn.glitch.com/86f4ab29-647a-47d9-9006-7a356068646c%2Fdvdwhite.png?1553819694869g");

	x = width /2;
	y = width /2;
}

function draw()
{

	x += xVelocity;
	y += yVelocity;

	if(x > width || x < 0)
	{
		xVelocity = -xVelocity;
	}
	if(y > height || y < 0)
	{
		yVelocity = -yVelocity;
	}

	background(0);

	//ellipse(x, y, 50, 50);
	imageMode(CENTER);
	image(img, x, y, 100, 80);
}

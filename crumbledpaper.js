class Crumbledpaper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2


			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

		this.image = loadImage("paper.png");

	}
	display()
	{

			var paperpos=this.body.position;		
            this.scale = 0.1;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(0);
			fill("pink");
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
            image(this.image, 0, 0, 60,60);
			pop()

	}
}
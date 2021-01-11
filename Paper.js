/* class Paper {
    constructor(x,y,r) {

        var options = {
            'isStatic':false,
            'restitution' : 0.3,
            'friction' : 50,
            'density' : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("imgs/paper.png");
        World.add(world, this.body);

    }



    display() {
        var PPOS = this.body.position;


        push();
        translate(PPOS.x,PPOS.y);
        //rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r);
        //strokeWeight(5);
        //fill("orange");
        //ellipse(0,0,this.r,this.r);
        pop();


    }
}; */




class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		this.image=loadImage("imgs/paper.png");
		
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			//ellipse(0,0,this.r, this.r);
			pop();
			
	}

}
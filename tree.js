class Tree {
    constructor(x,y) {
      this.width = 450;
      this.height = 600;
      this.thickness=10;
      
      this.bottomBody = Bodies.rectangle(x,y,this.width,this.thickness,{
        isStatic:true
      });
      this.leftBody = Bodies.rectangle(0,y-this.height/2,this.thickness,this.height,{
        isStatic:false
      });
      this.rightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.width,this.thickness,this.height,{
        isStatic:false
      });
      
      this.image=loadImage("tree.png");
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);

    }
    display(){
      var pos =this.bottomBody.position;

      push()
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop()
    }
  };

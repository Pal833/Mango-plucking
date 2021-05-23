class mango{
    constructor(x, y, r){
        var options={
            isstatic: true,
            friction:1,
            restitution:0

        }
        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);

        World.add(World, this.body);
        
    }
}
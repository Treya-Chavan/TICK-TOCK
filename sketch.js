var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(600,600);
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    
    translate(300,300)
    rotate(-90)

    
    hr = hour();
    mn = minute();
    sc = second();

   
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    
    push();
    rotate(scAngle); 
    stroke("#9dd4d4");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    
    push();
    rotate(mnAngle);
    stroke(255, 255, 255);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

   
    push();
    rotate(hrAngle);
    stroke("#afeeee");
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    
    strokeWeight(10);
    noFill();
    
    stroke(255,255,255);
    arc(0,0,300,300,0,scAngle);
    
    stroke("#9dd4d4");
    arc(0,0,280,280,0,mnAngle);
    
    stroke("#afeeee");
    arc(0,0,260,260,0,hrAngle);
}
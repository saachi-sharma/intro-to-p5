function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);

    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}
function draw(){
    
    image(video, 60,80, 500, 300);
    fill("#FF0000");
    stroke("#FF0000");
    circle(30,30,60);

    rect(80,40,450,10);

    fill("#FF0000");
    stroke("#FF0000");
    circle(580,30,60);

    rect(30,40,10,450);

    image(video, 60,80, 500, 300);
    fill("#FF0000");
    stroke("#FF0000");
    circle(-30,-30,60);

}


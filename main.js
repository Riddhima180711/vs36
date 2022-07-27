function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    fill(0,0,255);
    stroke(0,0,255);
    circle(50, 50, 90);
    fill(0,255,0);
    stroke(0,255,0);
    rect(100, 35, 200, 30);
    fill(0,255,0);
    stroke(0,255,0);
    rect(35, 100, 30, 200);
}

function take_snapshot(){
    save('my_filter.png');
}

function filter_tint(){
    tint_color=document.getElementById('color_name').value;
}
function setup(){
    Canvas= createCanvas(640,480);
    Canvas.position(120,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}
 function filter_tint(){
     tint_color=document.getElementById("colour_name").value;
 }
 function take_snapshot(){
     save('sheep.png');
 }
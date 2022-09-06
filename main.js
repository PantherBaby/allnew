function preload()

{

}

function setup()
{
canvas=createCanvas(640,480);
canvas.position(110,250);

video=createCanvas(VIDEO);
video.hide();

tint_color=" ";
}

function draw()
{
image(video,0,0,648,480);
tint(tint_color);



}
 
function apply_color()
{
tint_color=document.getElementById("color").value;
}




canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");
color:"deeppink";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown"
    
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX -canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY -canvas.offsetTop;

    if(mouseEvent=="mousedown")
    {
        console.log("current positon of x and y cordinates");
        console.log("x=" +  current_position_of_mouse_x+"y=" +  current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.lineTo(current_positon_of_mouse_x,current_positon_of_mouse_y,0,2*Math.PI);
        ctx.stroke();

    }
}
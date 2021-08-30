var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player="";
var block="";

function player_Update(){
    fabric.Image.fromURL("player.png",function(Img){
    player=Img;
    player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player);
    });

}
function image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block=Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("shift and p is pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
document.getElementById("Currentwidth").innerHTML=block_width;
document.getElementById("Currentheight").innerHTML=block_height;

    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("shift and m is pressed together");
        block_width=block_width-10;
block_height=block_height-10;
document.getElementById("Currentwidth").innerHTML=block_width;
document.getElementById("Currentheight").innerHTML=block_height;

    }
   
    if(keypressed=='87'){
        console.log("w");
        image('wall.jpg');
    }
    if(keypressed=='71'){
        console.log("g");
        image('ground.png');
    }
    if(keypressed=='76'){
        console.log("l");
        image('light_green.png');
    }
    if(keypressed=='84'){
        console.log("t");
        image('trunk.jpg');
    }
    if(keypressed=='82'){
        console.log("r");
        image('roof.jpg');
    }
    if(keypressed=='89'){
        console.log("y");
        image('yellow_wall.png');
    }
    if(keypressed=='68'){
        console.log("d");
        image('dark_green.png');
    }
    if(keypressed=='85'){
        console.log("u");
        image('unique.png');
    }
    if(keypressed=='67'){
        console.log("c");
        image('cloud.jpg');
    }
    if(keypressed=='38'){
        console.log("up");
        up();
    }
    if(keypressed=='40'){
        console.log("down");
        down();
    }
    if(keypressed=='37'){
        console.log("left");
        left();
    }
    if(keypressed=='39'){
        console.log("right");
        right();
    }

}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("Block image height="+block_height);
        console.log("when up arrow key is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player);
        player_Update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("Block image height="+block_height);
        console.log("when down arrow key is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player);
        player_Update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block image width="+block_width);
        console.log("when left arrow is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player);
        player_Update();
    }
}
function right (){
    if(player_x<=850){
  player_x=player_x+block_width;
  console.log("block image width"+block_width);
  console.log("when left arrow is pressed,x="+player_x+",y"+player_y);
  canvas.remove(player);
   player_Update();
    }
}
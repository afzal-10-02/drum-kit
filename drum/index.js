var numberofbutton = document.querySelectorAll(".box1 button").length;

for(var i=0; i<numberofbutton; i++){
    document.querySelectorAll(".box button")[i].addEventListener("click" , func1);
}    
function func1(){
    var key = this.innerHTML;
    makesound(key);
    buttonanimation(key);
}

document.addEventListener("keypress" , func2);

function func2(event){
    makesound(event.key);
    buttonanimation(event.key);
}



function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./music/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./music/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./music/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./music/tom-4.mp3");
            audio.play();
            break;    
        case "j":
            var audio = new Audio("./music/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./music/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./music/kick-bass.mp3");
            audio.play();
            break;
        

        default:
            
    } 

}
function buttonanimation(keypressed){

        var buttonkey = document.querySelector("."+keypressed);
        buttonkey.classList.add("pressed");

        setTimeout(removepressed , 200 );
        function removepressed(){
            document.querySelector("."+keypressed).classList.remove("pressed");
}
}
var key = this.innerHTML;
    makesound(key);
    buttonanimation(key);
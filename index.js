var noofdrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofdrum; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var innerhtml = this.innerHTML;
        makesound(innerhtml);
        buttonanimation(innerhtml);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);

})
function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":

            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
            default:
                console.log("innerhtml");


    }

}
function buttonanimation(currentkey){
    var ani=document.querySelector("."+currentkey);
    ani.classList.add("pressed");
    setTimeout(function(){
    ani.classList.remove("pressed");

    },100);

}






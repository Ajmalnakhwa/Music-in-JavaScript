//for(Start;condition;inc/dec) 
//{
// body
//}
var numberOfDrumButton = document.querySelectorAll(".drum").length;
// Mouse Click //
for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function () {
            console.log(this);
            var buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
        });
}

// Keyboard Click //
document.addEventListener("keypress", function (event) {
    console.log(event);
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "D":
            var audio = new Audio('assets/music/tom-1.mp3')
            audio.play();
            break;
        case "R":
            var audio = new Audio('assets/music/tom-2.mp3')
            audio.play();
            break;
        case "U":
            var audio = new Audio('assets/music/tom-3.mp3')
            audio.play();
            break;
        case "M":
            var audio = new Audio('assets/music/tom-4.mp3')
            audio.play();
            break;
        case "K":
            var audio = new Audio('assets/music/snare.mp3')
            audio.play();
            break;
        case "I":
            var audio = new Audio('assets/music/crash.mp3')
            audio.play();
            break;
        case "T":
            var audio = new Audio('assets/music/kick-bass.mp3')
            audio.play();
            break;
        default:
            console.log(key);
    }
}
//addEventListener(type, listener);

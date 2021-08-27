

/*for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerhtml = this.innerHTML;
    switch (buttonInnerhtml) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      default:
        console.log(buttonInnerhtml);
        break;
    }
  });
}*/




//Anothher way to write function 

/*for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",mouseclick)
}

function mouseclick() {

    alert("tik tik tik")
    
}   */








 var numberofdrums = document.querySelectorAll("button").length;
for (let i = 0; i<numberofdrums; i++) {
  

  document.querySelectorAll("button")[i].addEventListener("click",function() {


    var buttonInnerHTML = this.innerHTML;
    
    makesound(buttonInnerHTML);
    Animation(buttonInnerHTML);

  })
}



document.addEventListener("keypress",function(presss){
   makesound(presss.key);

   Animation(presss.key);
})



function makesound(key) {
  
  if (key ==="w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (key =="a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }

  if (key ==="s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }

  if (key ==="d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }

  if (key ==="j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }

  if (key ==="k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }

  if (key ==="l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }

  else{
    console.log("THis is not valid")
  }


}
  
function Animation(currentkey) {

    let pressButton =  document.querySelector("."+currentkey);

    pressButton.classList.add("pressed");
    setTimeout(function() {
      pressButton.classList.remove("pressed");
    },200);
      
    }

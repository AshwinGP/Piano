var totalButtons=document.querySelectorAll(".tone").length;

for(var i=0; i<totalButtons; i++){
  document.querySelectorAll(".tone")[i].addEventListener("click",function(){
    var innerHtml = this.innerHTML;
    keyPress(innerHtml);
    buttonAnimation(innerHtml);
  });
  }


document.addEventListener("keydown", function(event) {
    keyPress(event.key);
    buttonAnimation(event.key);
  });

  function keyPress(key){
    switch(key){
        case "A":
        var anote = new Audio("sounds/piano-mp3_A0.mp3");
        anote.play();
        break;

        case "S":
        var snote = new Audio("sounds/piano-mp3_A1.mp3");
        snote.play();
        break;

        case "D":
         var dnote = new Audio("sounds/piano-mp3_A2.mp3");
          dnote.play();
          break;

          case "F":
         var fnote = new Audio("sounds/piano-mp3_A3.mp3");
         fnote.play();
         break;

         case "H":
         var hnote = new Audio("sounds/piano-mp3_A4.mp3");
         hnote.play();
         break;

         case "J":
         var jnote = new Audio("sounds/piano-mp3_A5.mp3");
         jnote.play();
         break;

         case "K":
         var knote = new Audio("sounds/piano-mp3_A6.mp3");
          knote.play();
          break;

          case "L":
             var lnote = new Audio("sounds/piano-mp3_Ab1.mp3");
            lnote.play();
            break;

            default:console.log(innerHtml);
    }

  }
  function buttonAnimation(currentKey){
  var activeButton=document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

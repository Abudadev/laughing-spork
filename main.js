var audio = new Audio("drumrollflute.wav");

function reveal(){
    audio.play();
    document.getElementById("Reveal").style.opacity = 0;
    document.getElementById("Reveal").innerHTML = "It is Google lens!";
    setTimeout(function() {
        document.getElementById("Reveal").style.opacity = 1;
    },4000);
}
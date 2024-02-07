var mode = document.getElementById("mode-div");
var logos = document.querySelectorAll(".centriran_logo");
var genussnetz = document.getElementById("genussnetz-logo");
mode.onclick = function(){
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")){
        genussnetz.src = "./images/genussnetz-black.png";
        logos.forEach(function(logo) {
            logo.src = "./images/line-black.png";
        });
    } else {
        genussnetz.src = "./images/genussnetz.png";
        logos.forEach(function(logo) {
            logo.src = "./images/line.png";
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var scrolled = false;

    window.addEventListener("scroll", function() {
        if (!scrolled) {
            scrolled = true;
            setTimeout(function() {
                showPopup();
            }, 1000);
        }
    });
});

var popup = document.getElementById("popup");
function showPopup() {
    popup.style.display = "block";
    popup.classList.remove("hidden");
}

var icon = document.querySelector('#popup-close i');

icon.addEventListener('click', function() {
    popup.classList.add('hidden');
});

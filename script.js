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
    document.body.style.overflow = "hidden";
    popup.style.display = "block";
    popup.classList.remove("hidden");
    }

var icon = document.querySelector('#popup-close i');

icon.addEventListener('click', function() {
    document.body.style.overflow = "auto";
    popup.style.display = "none";
    popup.classList.add('hidden');
});


//Sakrivanje elemenata na <992px widht
var hamburgerDiv = document.getElementById("nav-hamburger");
var navIcon = document.getElementById("nav-icon");
var logo = document.getElementById("logo");
var sliderTxt = document.getElementById("slider-txt-container");

function proveriSirinuEkrana() {
  if (window.innerWidth < 992) {
    swiper.autoplay.start();
    swiper.pagination.el.classList.add('hidden');
    hamburgerDiv.classList.add("hidden");
    navIcon.classList.remove("hidden");
    sliderTxt.classList.add("container");
  } else {
    swiper.autoplay.stop();
    hamburgerDiv.classList.remove("hidden");
    navIcon.classList.add("hidden");
    sliderTxt.classList.remove("container");
    swiper.pagination.el.classList.remove('hidden');
  }
}

//Konstantna provera sirine ekrana
function onemoguciScroll(event) {
    event.preventDefault();
}

window.addEventListener("load", proveriSirinuEkrana);
window.addEventListener("resize", proveriSirinuEkrana);

navIcon.addEventListener('click', function() {
    hamburgerDiv.classList.toggle("hidden");
    document.body.classList.toggle("nav-body");
    logo.classList.toggle("hidden");
    if (logo.classList.contains("hidden")) {
        window.addEventListener('wheel', onemoguciScroll, { passive: false });
        navIcon.classList.add('fa-x');
        navIcon.classList.remove('fa-bars');
    } else {
        window.removeEventListener('wheel', onemoguciScroll);
        navIcon.classList.add('fa-bars');
        navIcon.classList.remove('fa-x');
    }
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000, 
    },
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


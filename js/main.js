
var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader-container").style.display = "none";
  // document.getElementById("myDiv").style.display = "block";
}

/* toggler btn activation */
$(".toggler-btn").click(function(){
  $("nav").addClass("open-nav");
});
$(".cross").click(function(){
  $("nav").removeClass("open-nav");
});


$(".user-btn").click(function(){
  $(".user-info").toggleClass("open-user");
});

$(".user-btn").click(function(){
  $(".buy").toggleClass("d-none");
});

/* ===== sticky navbar ===== */
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* ===== counter-up ===== */
$('.counter').counterUp({
    delay: 50,
    time: 2000,
});

/* ========== swiper slider ========== */
var swiper = new Swiper(".testimonialSwiper", {
    // Default parameters
    direction: "horizontal",
    nextButton: '.swiper-next',
    prevButton: '.swiper-prev',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })

  /* swiper slider deactivate on mouse hover and then activate again */
  $(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });
//css scroll animation start
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
//css scroll animation end

// latest news slider start
$(document).ready(function () {
  $(".latest-news-slider").slick({
    autoplay: true, // Auto-play the slides
    arrows: true, // Show navigation arrows
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// latest news slider end

// lightbox video start
// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + "&autoplay=1"; // adding autoplay to the URL
  document.getElementById(div).style.display = "block";
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace("&autoplay=1", ""); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = "none";
}
// lightbox video end
// important links slider start
$(document).ready(function () {
  $(".important-links-slider").slick({
    autoplay: true, // Auto-play the slides
    arrows: true, // Show navigation arrows
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 7, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// important links slider end

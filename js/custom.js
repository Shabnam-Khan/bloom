$(function(){
//slick slider
$('.port-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

// scroll spy 
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
      $('.navbar').addClass('navbg');
    }
    else{
      $('.navbar').removeClass('navbg');
    }
  });

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        html_body.animate({
        scrollTop: target.offset().top - 95
        }, 1500);
        return false;
        }
    }
});
    
//  back to top 
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 100){
      $('.back-to-top').fadeIn(500);
   }
    else{
      $('.back-to-top').fadeOut(500);
    }
  });
})

var email = document.getElementById('email');
var email_error = document.getElementById('email_err');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function sub(){
    if(email.value == ''){
        email_error.innerHTML = "Please Enter Your Email Address";
        email.style.border = '2px solid red';
        email.focus();
        return false;
    }
    if(!regex.test(email.value)){
        email_error.innerHTML = "Enter Valid Email Address";
        email.style.border = '2px solid red';
        email.focus();
        return false;
    }
}

function errvalidate(){
    if(email.value != ''){
        email_error.innerHTML = "";
        email.style.border = '2px solid green';
    }
}

email.addEventListener('blur', errvalidate);
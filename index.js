//Wow JS
new WOW().init();

//AOS JS
AOS.init();



// Slick Slider carousel
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });

  $('.caption_slides').slick({
    dots: true
  });

});

var options = {
  strings: ["SAFE SEX"],
  typeSpeed: 150,
   fadeOut: true
}

var typed = new Typed(".Typing", options);

$(document).ready(function () {
        $("#image img").click(function () {
            $("#caption").slideToggle();
        });
    });
    $(document).ready(function () {
            $("#image img").click(function () {
                $("#caption1").slideToggle();
            });
        });
        $(document).ready(function () {
                $("#image img").click(function () {
                    $("#caption2").slideToggle();
                });
            });

            function musplay()
{
  document.getElementById("music").play();
}
function musstop()
{
  document.getElementById("music").pause();
}
function voldec()
{
  document.getElementById("music").volume-=0.1;
}
function volinc()
{
  document.getElementById("music").volume+=0.1;
}

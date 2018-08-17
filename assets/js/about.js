$(document).ready(function()  {
  $('.f').fadeIn(800);
  $('.title').fadeIn(400);
  $('.subtitles').fadeIn(600);
  $('.indian_boi').fadeIn(800);

  $("#circle1").delay(400);
  $("#circle2").delay(1100);
  $(".bubble").delay(1800);
  $("#circle1").fadeIn(700);
  $("#circle2").fadeIn(700);
  $(".bubble").fadeIn(700);


  $("#I").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let background = "I’m a second year Electrical Engineering and Computer Science student at  \
                      UC Berkeley. I’ve had the honor of living in the Bay Area my whole life and \
                      am excited to pursue my higher education at Berkeley. I have always loved to \
                      learn and the environment here at Berkeley is great for fostering that passion!"
    $(".text").text(background); // jQuery Function Number 6
    $(".text").css("top", "32%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);
  })

  $("#II").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let interests = "Outside of academics and programming, my greatest joys are going out with family and \
                    friends and watching T.V. I always love to have a good time and continuing to explore \
                     the Bay Area is one of my favorite ways to have fun. From a young age, I’ve used \
                     television and other media as a way to relax and you can always catch me binging \
                     one show or the other."
    $(".text").text(interests);
    $(".text").css("top", "28%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);

  })

  $("#III").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let hobbies = "I’m a caring person and a good friend. I always try to help out where \
                  I can and am a good listener. I would say my one big drawback is \
                  at times I can be a little standoffish and snarky but those occasions are \
                  rare! More often than not, you’ll find me smiling and laughing."
    $(".text").text(hobbies);
    $(".text").css("top", "34%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);

  })

  $("#IV").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let hobbies = "I love computer science and programming and I hope to explore the many areas \
                  of the field, whether it be industry or research, in the coming years of my \
                  career. However, down the line, I hope to join or start a nonprofit that uses \
                  some application for computer science for social good. Don’t hesitate to contact \
                  me if you want to work with me, have any questions, or just want to grab lunch!"
    $(".text").text(hobbies);
    $(".text").css("top", "29%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);

  })

})

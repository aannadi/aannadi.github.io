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


  $("#background").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let background = "I was born in Sunnyvale, and grew up in Dublin, California.\
                      Most of my family lives in India in Hyderabad \
                      where my parents immigrated from 20 years ago. \
                      I now go to the University of California, Berkeley where \
                      I am pursuing a degree in Electrical Engineering and Computer Science."
    $(".text").text(background); // jQuery Function Number 6
    $(".text").css("top", "32%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);
  })

  $("#interests").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let interests = "More than anything, even though it sounds corny, I love to learn \
                     I have a genuine passion for my education. Other than that, I love to \
                     watch TV, whether its binge watching Game of Thrones or rewatching the Office, \
                     and dance."
    $(".text").text(interests);
    $(".text").css("top", "35%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);

  })

  $("#hobbies").click(function() {
    $(".bubble").hide();
    $("#circle1").hide();
    $("#circle2").hide();
    $("#circle1").delay(200);
    $("#circle2").delay(800);
    $(".bubble").delay(1400);
    let hobbies = "My main hobby is my personal fitness. I love going to the gym and even \
                   more than that, I have found a real love for fitness classes like Zumba. \
                   I also love to watch Bollywood movies in my spare time and go to SF/explore \
                   the Bay Area!"
    $(".text").text(hobbies);
    $(".text").css("top", "34%");
    $("#circle1").fadeIn(600);
    $("#circle2").fadeIn(600);
    $(".bubble").fadeIn(600);

  })

})

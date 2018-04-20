$(document).ready(function()  {
  $('.title').fadeIn(600);
  $('.subtitles').fadeIn(900);
  $('.content').fadeIn(1200);
  $("#circle1").css("background-color", "#D8DAD3")
  $('.back_end').hide();
  $('.languages').hide();
  $('.soft_skills').hide();

  $("#exp_sub").click(function() {
    $(document).scrollTop($('#exp_item').offset().top); // jQuery Function Number 1
  })

  $("#ed_sub").click(function() {
    $(document).scrollTop($('#ed_item').offset().top);
  })

  $("#skills_sub").click(function() {
    $(document).scrollTop($('#skills_item').offset().top);
  })

  $('.circle').click(function() {
    let id = $(this).attr('id') // jQuery Function Number 2
    if (id == "circle1") {
      $('.front_end').show(); // jQuery Function Number 3
      $('.back_end').hide(); // jQuery Function Number 4
      $('.languages').hide();
      $('.soft_skills').hide();

      $("#circle1").css("background-color", "#D8DAD3") // jQuery Function Number 5
      $("#circle2").css("background-color", "white")
      $("#circle3").css("background-color", "white")
      $("#circle4").css("background-color", "white")

    } else if (id == "circle2") {
      $('.front_end').hide();
      $('.back_end').show();
      $('.languages').hide();
      $('.soft_skills').hide();

      $("#circle1").css("background-color", "white")
      $("#circle2").css("background-color", "#D8DAD3")
      $("#circle3").css("background-color", "white")
      $("#circle4").css("background-color", "white")
    } else if (id == "circle3"){
      $('.front_end').hide();
      $('.back_end').hide();
      $('.languages').show();
      $('.soft_skills').hide();

      $("#circle1").css("background-color", "white")
      $("#circle2").css("background-color", "white")
      $("#circle3").css("background-color", "#D8DAD3")
      $("#circle4").css("background-color", "white")
    } else if (id == "circle4") {
      $('.front_end').hide();
      $('.back_end').hide();
      $('.languages').hide();
      $('.soft_skills').show();

      $("#circle1").css("background-color", "white")
      $("#circle2").css("background-color", "white")
      $("#circle3").css("background-color", "white")
      $("#circle4").css("background-color", "#D8DAD3")
    }

  })

})

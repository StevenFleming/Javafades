$(document).ready(function() {
  $(".click2").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });



  $(".click1").click(function() {
    $("#walrus-showing2").toggle();
    $("#walrus-hidden2").toggle();
  });



  $(".click3").click(function() {
    $("#walrus-showing3").fadeIn();
 
  });




  $(".click4").click(function() {
    $("#walrus-hidden3").fadeOut();
    $("#walrus-showing3").fadeOut();
  });
});
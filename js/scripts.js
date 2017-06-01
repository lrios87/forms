$(document).ready(function() {
  $("form").submit(function(event) {
    var food1 = $("#food").val();
    var music2 = $("#music").val();
    var color3 = $("#color").val();

  $(".foodOutput").append(food1);
  $(".musicOutput").append(music2);
  $(".colorOutput").append(color3);

$(".survey").show();
event.preventDefault();
  });
});

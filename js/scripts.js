$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var food1 = $("#food").val();
    var music2 = $("#music").val();
    var color3 = $("#color").val();

  $(".foodOutput").text(food1);
  $(".musicOutput").text(music2);
  $(".colorOutput").text(color3);

  });
});


$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    const name = $("Input#name").val();
    const dob = $("Input#born").val();
    const food = $("#food").val();
    const music = $("input:radio[name=music]:checked").val();
    const favoriteColor = $("Input#color").val();
    
    $(".name").text(name);
    $(".born").text(dob);
    $(".food").text(food);
    $(".music").text(music);
    $(".color").text(favoriteColor);

    $("#survey").show();

    event.preventDefault();
  });
});



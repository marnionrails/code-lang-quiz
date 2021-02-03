$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();

    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
 

    let total = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5);



    if (total <= 8) {
        $("#c-sharp").show();
        $("#java, #ruby-on-rails").hide();
    } else if (total <= 13) {
        $("#java").show();
        $("#c-sharp, #ruby-on-rails").hide();
    } else if (total <= 18) {
        $("#ruby-on-rails").show();
        $("#java, #c-sharp").hide();
    } else {
      alert("Sorry, something went wrong!")
    }
  });
});

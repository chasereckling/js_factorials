var factorial = function(number) {

  if (number === 0) {
    return 1;
  }
  var i = 1;
  var total = 1;
  while (i <= number) {
    total = total * i;
    i++;
  }

  return total;
};

$(document).ready(function() {
  $("form#factorial_form").submit(function(event) {
    var number = parseInt($("input#factorial").val());
    var total = factorial(number);

    $(".total").text(total);
     event.preventDefault();

  });
});

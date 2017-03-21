$(document).ready(function(){
  $("#emailSubmit").click(function(){
    // enter transition


    // AJAX request to google sheets database
    $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://script.google.com/a/macros/usc.edu/s/AKfycbz3IjR4fg5okZstbAHZAweO-Bm6CbD9y0QK72yUFkDDhIrBFqg/exec', // the url where we want to POST
            data        : $("#emailInputForTraffic").val(), // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
  });
});

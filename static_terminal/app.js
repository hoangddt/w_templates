var inputReady = true;
var input = $('.ter-input');
// input.focus();
$('.terminal').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
});
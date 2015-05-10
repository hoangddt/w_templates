// Focus to input form
var inputReady = true;
var input = $('.ter-input');
input.focus();
$('.terminal').on('click', function(e){
  input.focus();
});

// bind text from input tag to terminal
input.on('keyup', function(e){
  $('.new-output').text(input.val());
});

// Handle command
$('.input-form').on('submit', function(e){
	e.preventDefault();
	var val = $(this).children($('.ter-input')).val().toLowerCase();
	var href;

	if (val === 'kittens'){
    	showKittens();
  	}else {
    	resetForm();
  	}
});

function resetForm(withKittens){
  var message = "Sorry that command is not recognized."
  var input = $('.ter-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "Huzzzzzah Kittehs!"
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}
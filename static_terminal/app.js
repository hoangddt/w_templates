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
	var data = [
		{
			command : 'help',
			messages : [
				'Welcome to hoangddt.net',
				'this is virtual terminal. The list below show some command that you can type in',
				'greeting : show greeting message',
				'who      : show name of the guys own this site',
				'pau      : print all url that related with this site',
				'email    : print my email address that you can contact with',
				'social   : print out all social link of me',
				'help     : this messages'
			]
		},
		{
			command : 'who',
			messages : [
				'Hi, my name is Hoang (full name: Truong Van Quoc Hoang)',
				'I live in Viet Nam, currently study IT at DaNang University of Technology',
				'I love coding....'
			]
		},
		{
			command : 'pau',
			messages : [
				'hoangddt.net       My personal home page (this site)',
				'blog.hoangddt.net  My blog',
				'games.hoangddt.net Some game that I created (pending)'
			]
		},
		{
			command : 'email',
			messages : [
				'hi@hoangddt.net'
			]
		},
		{
			command : 'social',
			messages : [
				'<a href="#">github.com/hoangddt<a>',
				'<a href="#">twitter.com/hoangddt<a>',
				'<a href="#">facebook.com/hoangddt.net<a>',
			]
		},
		{
			command : 'greeting',
			messages : [
				
			]
		},
		{
			messages : [
				'command not found',
				'type "help" to show valid command. Thank you'
			]
		}
	];

	e.preventDefault();
	var val = $(this).children($('.ter-input')).val().toLowerCase();
	
	if (val === 'kittens'){
    	showKittens();
  	}else {
    	resetForm();
  	}
});

function resetForm(withKittens){
  var message = "Sorry that command is not recognized."
  var input = $('.ter-input');


  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt command new-output"></p>');
  console.log($('.new-output').offset().top);
  // Autoscroll to bottom
  $('.terminal').animate({
                 scrollTop: $('.new-output').offset().top
                 //scrollTop: $('#your-id').offset().top
                 //scrollTop: $('.your-class').offset().top
              }, 'slow');

  // $('.new-output').velocity(
  //   'scroll'
  // ), {duration: 100}
}
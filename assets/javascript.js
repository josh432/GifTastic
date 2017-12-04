//Javascript for GifTastic//

var click = new Audio ("./assets/images/Click.mp3");

$(document).ready(function(){
	//Create array for giphy buttons//
	var fun = ['video games', 'legos', 'ninjago', 'spongebob', 'barbie', 'superheros', 'transformers', 'disney movies', 'teen titans', 'wild kratts', 'dr. seuss', 'mickey mouse shorts', 'pokemon'];
	//console.log(fun);

	//Create initial buttons//
$('#kidsLike').empty();
function renderButtons(){
	for (var i = 0; i < fun.length; i++){
		var cartoonBtn = $('<button>');
		cartoonBtn.addClass('cartoon');
		cartoonBtn.attr('data-name', fun[i]);
		cartoonBtn.text(fun[i]);
		$('.buttons').append(cartoonBtn);
		
	}

}
//console.log(fun);
renderButtons();


//Add additional buttons

$('#submit').on('click', function(event){
	event.preventDefault();
	//var cartoon = $('#kidsLike').val().trim();
	//fun.push(cartoon);
	//$('#kidsLike').empty();
	var cartoon = $("input[type='text']").val().trim();
    $("input[type='text']").val('');
    fun.push(cartoon);

    $(".buttons").empty();


	renderButtons();
	click.play();


});

//add GIFS to gifs collection area

$('.buttons').on('click', '.cartoon', function(){
	$('.gifs').empty();
	var laugh = $(this).attr('data-name');
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + laugh + "&api_key=kw5CipqPFY5XTEW4RbN6T30CL3JC0woJ&limit=12";
	click.play();

//Ajax call for specific kid's interest being clicked

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(response){
//console.log(response);
//sets response as still pictures with fixed height. adds class for sizing.
	var results = response.data;
	
	for (var j = 0; j < results.length; j++) {

		var gifDiv = $('<div class="item">');
		var p = $('<p>');
		$(p).html(results[j].rating);
		var cartoonImage = $('<img>');
		$(cartoonImage).attr('src', results[j].images.original_still.url);
		$(cartoonImage).attr('data-still', results[j].images.original_still.url);
		$(cartoonImage).attr('data-animate', results[j].images.fixed_height.url);
		$(cartoonImage).attr('data-state', 'still');
		$(cartoonImage).attr('class', 'gif');
		$(gifDiv).append(p);
		$(gifDiv).append(cartoonImage)
		$('.gifs').prepend(gifDiv);
	}



	});
});

//enables clickable gif play/stop functionality
$(".gifs").on("click", '.gif', function() {
click.play();	
var state = $(this).attr('data-state');

 if (state === 'still') {
 		 $(this).attr('src', $(this).attr('data-animate'));
         $(this).attr('data-state', 'animate');
        }else{ 
         $(this).attr('src', $(this).attr('data-still'));
         $(this).attr('data-state', 'still');


		 }
	});
});
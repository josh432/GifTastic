//Javascript for GifTastic//

$(document).ready(function(){
	//Create array for giphy buttons//
	var fun = ['pokemon', 'legos', 'ninjago', 'spongebob', 'barbie', 'superheros', 'transformers', 'disney movies', 'teen titans', 'wild kratts', 'dr. seuss', 'mickey mouse shorts'];
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


});

//add GIFS to gifs collection area

$('.buttons').on('click', '.cartoon', function(){
	$('.gifs').empty();
	var laugh = $(this).attr('data-name');
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + laugh + "&api_key=kw5CipqPFY5XTEW4RbN6T30CL3JC0woJ&limit=10";


//Ajax call for specific movie being clicked

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(response){
console.log(response);



})
})











})
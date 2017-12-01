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










})
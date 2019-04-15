$(document).ready(function(){
$('header').on('mouseenter', function (e) {
  e.preventDefault();
  $(this).addClass('active');
});

console.log ("hi");

// 
// $('header').hover( handlerIn, handlerOut ) 

$('header').on('mouseleave', function (e) {
  e.preventDefault();
  $(this).removeClass('active');
});




// $('.payments-requests').on('click', function (e) {
//   e.preventDefault();
//   $(".payments-requests li").addClass('active');
// });



// $('.top-line i').on('mouseenter', function(e) {
// 	e.preventDefault();
// 	$(this).addClass('animated bounce');
// });

// $('.top-line i').on('mouseleave', function(e) {
// 	e.preventDefault();
// 	$(this).removeClass('animated bounce');
// });



console.log ("pey");


})


$('.emailus').on('click', function(e) {
	e.preventDefault();
	$('.dialog-box-email').addClass('jelly');
	$(".dialog-boxes").css('z-index', '0');
});

console.log ("yo");

$('.dialog-box-email p').on('click', function(e) {
	e.preventDefault();
	$('.dialog-box-email').removeClass('jelly');
	$(".dialog-boxes").css('z-index', '-10');
});








$('.chatus').on('click', function(e) {
	e.preventDefault();
	$('.dialog-box-chat').addClass('jelly');
	$(".dialog-boxes-two").css('z-index', '0');
});


$('.dialog-box-chat h6').on('click', function(e) {
	e.preventDefault();
	$('.dialog-box-chat').removeClass('jelly');
	$(".dialog-boxes-two").css('z-index', '-10');
});










$(document).ready(function(){
	/*('p').dblclick(function(){
		$(this).toggleClass('green')
	})*/


/*$('p').mouseenter(function(){
	$(this).toggleClass('green')
});
$('p').mouseleave(function(){
	$(this).toggleClass('green')
});*/

/*$('h3').animate({'font-size': '17px'}, 1000);*/

/*$('h3').mouseenter(function(){
	$(this).animate({'font-size': '17px'}, 350);
});

$('h3').mouseleave(function(){
	$(this).animate({'font-size': '16px'}, 350);
});*/


/*$('h3').mouseenter(function(){
	$(this).slideUp(600).slideDown(350);
});*/

$('img').click(function(){
	$(this).fadeOut(500, function(){
		$(this).attr('src', 'img/s3picture2.jpg').fadeIn(500);
	});
});




})
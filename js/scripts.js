$(document).ready(function(){
	$('p.text').text('Jquery text function');
	$('.html').html('<h1>Thi is title using Jquery html function</h1>');

	$('p.clickmehide').click(function(){
		$('p.hideme').hide();
	});
	$('p.clickmeshow').dblclick(function(){
		$('p.hideme').show();
	});
		

});
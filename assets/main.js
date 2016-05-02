$(document).ready(function() {
	var contents = $('#frame').contents().get(0);
	var src = $('#frame').attr('src');

	$(contents).on('click', function(e) {
		window.open(src, '_blank');
	});


	var body = $('#frame').contents().find("html");
	$(body).css('cursor', 'pointer');
})
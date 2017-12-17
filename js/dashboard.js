
var dashboard = function() {

	console.log(1);
	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
}

$(function() {

	if($('#dashboard').length>0) {
		if(isLoggedIn()) {
			dashboard();
		} else {
			window.location.href = '/';
		}
	}
});
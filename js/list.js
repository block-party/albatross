
var list = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
}

$(function() {

	if($('#list').length>0) {
		if(isLoggedIn()) {
			list();
		} else {
			window.location.href = '/';
		}
	}
});
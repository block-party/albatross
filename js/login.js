
var login = function() {

	$('section.main').removeAttr('hidden');
	$('#form-capture').click(function() {
		$('#form-capture-preview').removeAttr('hidden');
		let scanner = new Instascan.Scanner({
			video: $('#form-capture-preview .preview').get(0),
		});
		scanner.addListener('scan', function(content) {
			$('#form-capture-preview').attr('hidden', true);
			$('#login [name="password"]').val(content);
		});
		Instascan.Camera.getCameras().then(function(cameras) {
		if(cameras.length > 0) {
			scanner.start(cameras[0]);
		} else {
			swal('Oops...', 'No camera found', 'error',);
		}
		}).catch(function(e) {
			$('#form-capture-preview').attr('hidden', true);
		});
	});
	$('#login [name="submit"]').click(function(e) {
		e.preventDefault();
		var error = false;
		if($('#login [name="username"]').val() == '') {
			$('#login .label-username').removeAttr('hidden');
			error = true;
		} else {
			$('#login .label-username').attr('hidden', true);
		}
		if($('#login [name="password"]').val() == '') {
			$('#login .label-password').removeAttr('hidden');
			error = true;
		} else {
			$('#login .label-password').attr('hidden', true);
		}
		if(error === false) {
			$.cookie('username', $('#login [name="username"]').val(), {path: '/' });
			$.cookie('password', $('#login [name="password"]').val(), {path: '/' });
			window.location.href = '/dashboard';
		}
	});
}

$(function() {

	if($('#login').length>0) {
		if(!isLoggedIn()) {
			login();
		} else {
			window.location.href = '/dashboard';
		}
	}
});
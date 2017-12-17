
var login = function() {

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
			console.error(e);
		});
	});
}

$(function() {
	if($('#login').length>0) {
		login();
	}
});
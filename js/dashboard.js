
var add = function() {

	$('section.main').removeAttr('hidden');
	$('#add [name="list"]').click(function(e) {
		window.location.href = '/dashboard/'+_albatross.project;
	});
	$('#add [name="file-fingerprint"]').change(function(e) {
		if($(this).prop('files').length === 0) {
			$('#add [name="fingerprint"]').val('');
		} else {
			var file = $(this).prop('files')[0];
			var reader = new FileReader();
			reader.onload = function() {
				var binary = event.target.result;
				var md5 = CryptoJS.MD5(binary).toString();
				$('#add [name="fingerprint"]').val(md5);
			}
			reader.readAsBinaryString(file);
		}
	});
	$('#add [name="file-iris"]').change(function(e) {
		if($(this).prop('files').length === 0) {
			$('#add [name="iris"]').val('');
		} else {
			var file = $(this).prop('files')[0];
			var reader = new FileReader();
			reader.onload = function() {
				var binary = event.target.result;
				var md5 = CryptoJS.MD5(binary).toString();
				$('#add [name="iris"]').val(md5);
			}
			reader.readAsBinaryString(file);
		}
	});
	$('#add [name="fingerprint"]').focus(function(e) {
		$(this).blur();
		$('#add [name="file-fingerprint"]').click();
	});
	$('#add [name="iris"]').focus(function(e) {
		$(this).blur();
		$('#add [name="file-iris"]').click();
	});
	$('#add [name="add"]').click(function(e) {
		e.preventDefault();
		if($('#add [name="username"]').val() == '') {
			$('#add .label-username').removeAttr('hidden');
		} else {
			$('#add .label-username').attr('hidden' ,true);
		}
		if($('#add [name="fingerprint"]').val() == '' && $('#add [name="iris"]').val() == '') {
			$('#add .label-verify').removeAttr('hidden');
		} else {
			$('#add .label-verify').attr('hidden' ,true);
		}
	});
}

var list = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
	$('#list [name="add"]').click(function(e) {
		window.location.href = '/dashboard/'+_albatross.project+'/add';
	});
}

var addProject = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
	$('#add-project [name="dashboard"]').click(function(e) {
		window.location.href = '/dashboard';
	});
}

var dashboard = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
	$('#dashboard [name="add"]').click(function(e) {
		window.location.href = '/dashboard/add';
	});
}

$(function() {

	if($('seciont.main').attr('data-auth-required') === "true") {
		if(!isLoggedIn()) {
			window.location.href = '/';
		}
	}
	switch(1) {
		case $('#dashboard').length:
			dashboard();
			break;
		case $('#add-project').length:
			addProject();
			break;
		case $('#list').length:
			list();
			break;
		case $('#add').length:
			add();
			break;
	}
});

var payment = function() {

	$('section.main').removeAttr('hidden');
	$('#payment [name="payments"]').click(function(e) {
		window.location.href = '/dashboard/'+_albatross.project+'/pay';
	});
	$('#payment [name="file-fingerprint"]').change(function(e) {
		if($(this).prop('files').length === 0) {
			$('#payment [name="fingerprint"]').val('');
		} else {
			var file = $(this).prop('files')[0];
			var reader = new FileReader();
			reader.onload = function() {
				var binary = event.target.result;
				var md5 = CryptoJS.MD5(binary).toString();
				$('#payment [name="fingerprint"]').val(md5);
			}
			reader.readAsBinaryString(file);
		}
	});
	$('#payment [name="file-iris"]').change(function(e) {
		if($(this).prop('files').length === 0) {
			$('#payment [name="iris"]').val('');
		} else {
			var file = $(this).prop('files')[0];
			var reader = new FileReader();
			reader.onload = function() {
				var binary = event.target.result;
				var md5 = CryptoJS.MD5(binary).toString();
				$('#payment [name="iris"]').val(md5);
			}
			reader.readAsBinaryString(file);
		}
	});
	$('#payment [name="fingerprint"]').focus(function(e) {
		$(this).blur();
		$('#payment [name="file-fingerprint"]').click();
	});
	$('#payment [name="iris"]').focus(function(e) {
		$(this).blur();
		$('#payment [name="file-iris"]').click();
	});
	$('#payment [name="pay"]').click(function(e) {
		e.preventDefault();
		if($('#payment [name="fingerprint"]').val() == '' && $('#payment [name="iris"]').val() == '') {
			$('#payment .label-verify').removeAttr('hidden');
		} else {
			$('#payment .label-verify').attr('hidden' ,true);
			swal({
				title: 'Success',
				text: 'Payment Success',
				type: 'success',
			}).then((result) => {
				if(result.value) {
					window.location.href = '/';
				}
			});
		}
	});
}

var pay = function() {

	$('section.main').removeAttr('hidden');
	$('#pay [name="dashboard"]').click(function(e) {
		window.location.href = '/dashboard';
	});
	$('#pay [name="pay"]').click(function(e) {
		window.location.href = '/dashboard/'+_albatross.project+'/pay/'+$(this).attr('data-value');
	});
}

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
		var status = true;
		if($('#add [name="username"]').val() == '') {
			$('#add .label-username').removeAttr('hidden');
			status = false;
		} else {
			$('#add .label-username').attr('hidden' ,true);
		}
		if($('#add [name="fingerprint"]').val() == '' && $('#add [name="iris"]').val() == '') {
			$('#add .label-verify').removeAttr('hidden');
			status = false;
		} else {
			$('#add .label-verify').attr('hidden' ,true);
		}
		if(status) {
			var date = new Date();
			swal({
				title: 'Success',
				text: 'Agreement signed at '+date.getHours()+':'+date.getMinutes()+' '+date.getDate()+':'+date.getMonth()+':'+date.getFullYear()+'\nWorker added to project.',
				type: 'success',
			}).then((result) => {
				if(result.value) {
					window.location.href = '/';
				}
			});
		}
	});
}

var list = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item[data-value]').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
	$('#list [name="add"]').click(function(e) {
		window.location.href = '/dashboard/'+_albatross.project+'/add';
	});
}

var addProject = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item[data-value]').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
	$('#add-project [name="dashboard"]').click(function(e) {
		window.location.href = '/dashboard';
	});
	$('#add-project [name="date-start"], #add-project [name="date-end"]').datetimepicker({
		timepicker: false,
		format: 'd/m/Y',
		formatDate: 'Y/m/d',
	});
	$('#add-project [name="time-start"], #add-project [name="time-end"]').datetimepicker({
		timepicker: true,
		format: 'H:i',
		step: 5,
		datepicker: false,
	});
}

var dashboard = function() {

	$('section.main').removeAttr('hidden');
	$('.list-group .list-group-item[data-value]').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value');
	});
	$('#dashboard [name="add"]').click(function(e) {
		window.location.href = '/dashboard/add';
	});
	$('#dashboard [name="payment"]').click(function(e) {
		window.location.href = '/dashboard/'+$(this).attr('data-value')+'/pay';
	});
}

$(function() {

	if($('section.main').attr('data-auth-required') === "true") {
		if(!loginUser()) {
			swal({
				title: 'Oops...',
				text: 'Login failed',
				type: 'error',
			}).then((result) => {
				if(result.value) {
					window.location.href = '/';
				}
			});
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
		case $('#pay').length:
			pay();
			break;
		case $('#payment').length:
			payment();
			break;
	}
});
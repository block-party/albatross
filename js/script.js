
// var web3 = new Web3(new Web3.providers.HttpProvider('/testrpc'));
// var abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"name","type":"string"},{"name":"userid","type":"uint256"},{"name":"password","type":"string"},{"name":"iris","type":"string"},{"name":"fingerprint","type":"string"},{"name":"verified","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userid","type":"uint256"},{"name":"password","type":"string"}],"name":"loginUser","outputs":[{"name":"s","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userid","type":"uint256"}],"name":"getUserById","outputs":[{"name":"_i","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getUser","outputs":[{"name":"iris_","type":"string"},{"name":"name","type":"string"},{"name":"dateOfBirth","type":"uint256"},{"name":"social","type":"uint256"},{"name":"status","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"userid","type":"uint256"},{"name":"iris","type":"string"},{"name":"fingerprint","type":"string"},{"name":"verified","type":"uint256"}],"name":"createUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"updateUserproject1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"updateUserproject2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
// var AlbatrossContract = web3.eth.contract(abi);
// var contractInstance = AlbatrossContract.at('0xdc51e96e97464d3cfcfd500e12760ea24c920489');

function loginUser() {
	var userID = $.cookie('username');
	if(typeof(userID) === 'undefined') {
		return false;
	}
	if(userID == '') {
		$.removeCookie('username', {path: '/' });
		$.removeCookie('password', {path: '/' });
		return false;
	}
	var userPassword = $.cookie('password');
	if(typeof(userPassword) === 'undefined') {
		return false;
	}
	//var status = contractInstance.loginUser(userID, userPassword, {from: web3.eth.accounts[0]});
	status = true;
	if(status === false) {
		$.removeCookie('username', {path: '/' });
		$.removeCookie('password', {path: '/' });
		return false;
	} else {
		return true;
	}
}

var dime = function() {

	$('.container.main').css({
		minHeight: $(window).height() - $('header').outerHeight() - $('footer').outerHeight(),
	});
}

var isLoggedIn = function() {

	if(typeof($.cookie('username')) === 'undefined'
		|| $.cookie('username') === ''
		|| typeof($.cookie('password')) === 'undefined'
		|| $.cookie('password') === '') {
		return false;
	}
	return true;
}

$(function() {

	dime();
	$(window).resize(dime);
	$('footer').velocity({
		opacity: 1,
	}, 250);

	$('[name="logout"]').click(function(e) {
		e.preventDefault();
		$.removeCookie('username', {path: '/' });
		$.removeCookie('password', {path: '/' });
		window.location.href = '/';
	});

	$('[name="dashboard"]').click(function(e) {
		e.preventDefault();
		window.location.href = '/dashboard';
	});

	if(isLoggedIn()) {
		$('.container-logout').removeAttr('hidden');
	}
});

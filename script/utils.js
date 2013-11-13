$(function() {

	//Toggle Boxes
	$( ".menu_universal-bt_list_box" ).click(function() {
		$( ".menu_universal-list_box" ).slideToggle( "slow", function() {
		});
		$(this).toggleClass('active');

	});
	$( ".menu_universal-bt_login_on_box" ).click(function() {
		$( ".menu_universal-login_on_box" ).slideToggle( "slow", function() {
		});
		$(this).toggleClass('active');
	});
	$( ".menu_universal-bt_login_off_box" ).click(function() {
		$( ".menu_universal-login_off_box" ).slideToggle( "slow", function() {
		});
		$(this).toggleClass('active');
	});
})
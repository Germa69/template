// (
// 	)();
$('.header__search-input').focus( function() {
	$('.header__search-suggest').fadeIn();
}),

$('.header__search-input').blur( function() {
	$('.header__search-suggest').fadeOut();
})
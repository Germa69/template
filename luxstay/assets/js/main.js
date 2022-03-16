// [Loader Page]
$(window).on('load', function(e) {
    $('.loader').delay(1000).fadeOut('linear');
});

// [Search Suggest]
$('.header__search-input').focus(function() {
	$('.header__search-suggest').fadeIn();
}),

$('.header__search-input').blur(function() {
	$('.header__search-suggest').fadeOut();
})

// [Change Languages] 
// [1. Jquery]
$('.header__nav-language').click(function() {
	$('.change__languages').toggleClass('show');
});

// [2. DOM Event]
// const btnChangeLanguages = document.querySelector('.header__nav-language');
// const changeLanguagesOptions = document.querySelector('.change__languages');

// function handleChangeLanguages() {
// 	changeLanguagesOptions.classList.toggle('show');
// }

// btnChangeLanguages.addEventListener('click', handleChangeLanguages);



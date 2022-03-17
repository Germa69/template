// [Loader Page]
$(window).on("load", function (e) {
  $("#loader-wrapper").delay(2500).fadeOut("linear");

  setTimeout(function () {
    $(".loader-section").addClass("no-js");
  }, 2200);
});

// [Search Suggest]
$(".header__search-input").focus(function () {
  $(".header__search-suggest").fadeIn();
}),
  $(".header__search-input").blur(function () {
    $(".header__search-suggest").fadeOut();
  });

// [Change Languages]
// [1. Jquery]
$(".header__nav-language").click(function () {
  $(".change__languages").toggleClass("show");
});

// [2. DOM Event]
// const btnChangeLanguages = document.querySelector('.header__nav-language');
// const changeLanguagesOptions = document.querySelector('.change__languages');

// function handleChangeLanguages() {
// 	changeLanguagesOptions.classList.toggle('show');
// }

// btnChangeLanguages.addEventListener('click', handleChangeLanguages);

// [Date Range Picker]
$(function () {
  $('input[name="datefilter"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[name="datefilter"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(
        picker.startDate.format("MM/DD") +
          " - " +
          picker.endDate.format("MM/DD")
      );
    }
  );

  $('input[name="datefilter"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );
});


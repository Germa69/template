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

$(".header__search-input").on("keyup", function () {
  if ($(this).val().length > 0) {
    $(".header__search-icon-del").css("display", "flex");
  } else {
    $(".header__search-icon-del").css("display", "none");
  }
});

$(".header__search-icon-del").on("click", function() {
  $(".header__search-input").val("");
  $(this).css("display", "none");
});

// [Booking number]
$(".header__search-options-text").click(function () {
  $(".header__search-booking").toggleClass("show");
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

// [Booking number]
$(function () {
  /**
   *  Three steps:
   *
   *    1. Find Which button we click
   *    2. Find the parent of that button
   *    3. Find the exact input field we need to change from that parent
   */

  $(".header__booking-plus").on("click", function () {
    let that = $(this);
    let numberParent = that.parent();
    let booking_number = numberParent.find(".header__booking-number");
    let booking_minus = numberParent.find(".header__booking-minus");
    let value = booking_number.val();

    booking_number.val(++value);
    booking_minus.removeClass("header__booking-minus--disabled");
  }),
    $(".header__booking-minus").on("click", function () {
      if (!$(this).hasClass("header__booking-minus--disabled")) {
        let that = $(this);
        let numberParent = that.parent();
        let booking_number = numberParent.find(".header__booking-number");
        let booking_minus = numberParent.find(".header__booking-minus");
        let search_options_text = $("header__search-options-text");
        let value = booking_number.val();

        if (value != 0) {
          booking_number.val(--value);
        } else {
          search_options_text.html("Số khách");
          booking_minus.addClass("header__booking-minus--disabled");
        }
      }
    });

  $(".header__booking-delete").on("click", function () {
    let booking_number = $(".header__booking-number");
    booking_number.val(0);
  });
});

// [Nav mobile]
$(".nav__mobile-btn--show").click(function () {
  $(".nav__mobile").addClass("show-nav__mobile");
  $(".nav_overlay").addClass("show-overlay");
});

$(".nav__mobile-close").click(function () {
  $(".nav__mobile").removeClass("show-nav__mobile");
  $(".nav_overlay").removeClass("show-overlay");
});

$(".nav_overlay").click(function () {
  $(".nav__mobile").removeClass("show-nav__mobile");
  $(".nav_overlay").removeClass("show-overlay");
});

// [Nav mobile language]
$(".nav__mobile-language").click(function () {
  $(".mobile__language").toggleClass("show-mobile__language");
});

// Bottom on Top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $(".bottom-on-top__btn").fadeIn();
  } else {
    $(".bottom-on-top__btn").fadeOut();
  }
});

$(".bottom-on-top__btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500);
});

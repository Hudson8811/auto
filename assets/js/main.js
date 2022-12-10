/* header */

jQuery(function ($) {
	$(window).scroll(function () {
		var scrollHeaderHidden = $(window).scrollTop();
		if (scrollHeaderHidden > 150) {
			$(".header-scroll").removeClass("hidden");
		} else if (scrollHeaderHidden < 150) {
			$(".header-scroll").addClass("hidden");
		}
	});
	$("#burger").click(function () {
		$(this).toggleClass("open");
		$('.mobile-menu').slideToggle();
	});
	$(".catalog-menu-btn").click(function () {
		$(this).toggleClass("open");
		$('.catalog-menu').toggleClass("hidden");
	});




	/* filter */
	$(".filter-show-more.close").click(function () {
		$(this).fadeOut(0);
		$('.filter-show-more.open').fadeIn(0);
		$('.row-select').css({ "height": "unset", "max-height": "unset" });
	});
	$(".filter-show-more.open").click(function () {
		$(this).fadeOut(0);
		$('.filter-show-more.close').fadeIn(0);
		$('.row-select').css({ "height": "4em", "max-height": "4em" });
	});




	/* three-forms */
	$(".three-forms-show-more.close").click(function () {
		$(this).fadeOut(0);
		$(this).siblings('.three-forms-show-more.open').fadeIn(0);
		$(this).siblings('.text-show-more').css({ "height": "unset", "max-height": "unset" });
	});
	$(".three-forms-show-more.open").click(function () {
		$(this).fadeOut(0);
		$(this).siblings('.three-forms-show-more.close').fadeIn(0);
		$(this).siblings('.text-show-more').css({ "height": "80px", "max-height": "none" });
	});




	/* brandnames */
	$(".brandname .showMore-btn").click(function () {
		$(this).toggleClass('closed');
		$(this).siblings('.showMore-box').toggleClass('closed').toggleClass('open');
	});


	$('.js-slider-banks').slick({
		slidesToShow: 8,
		slidesToScroll: 8,
		responsive: [
			{ breakpoint: 1024, settings: { slidesToShow: 6, slidesToScroll: 6 } },
			{ breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 4 } },
			{ breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 4 } },
			{ breakpoint: 400, settings: { slidesToShow: 2, slidesToScroll: 2 } }
		],
		rows: 2,
	});
});


const fancyDefaultOptions = {
	type: 'inline',
	opts: {
		//speed: 600,
		//transitionDuration: 700,
		backFocus: false,
		autoFocus: false,
		buttons: ['close'],
		/*smallBtn: true,
		btnTpl: {

			close: '<button data-fancybox-close class="custom-fancybox-close" title="{{CLOSE}}">' +
				'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L17 17M17 1L1 17" stroke="black" stroke-width="1.5"/></svg>' +
				"</button>",
			smallBtn: '<button data-fancybox-close class="custom-fancybox-close " title="{{CLOSE}}">' +
				'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L17 17M17 1L1 17" stroke="black" stroke-width="1.5"/></svg>' +
				"</button>"
		},*/
		baseClass: 'fancybox-main-modal',
		touch: false,

		afterShow: function (instance, slide) {

		}
	}
}


function openModalSuccessForm() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#ac_form_has_been_sent',
	});

	if ($.fancybox.getInstance() !== false) {
		$.fancybox.close();
		setTimeout(() => {
			$.fancybox.open(opts);
		}, 500);
	}
	else {
		$.fancybox.open(opts);
	}
}
function openModalTestDrive() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#test-drive-modal',
	});
	$.fancybox.open(opts);
}
function openModalGetInCredit() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#get-in-credit-modal',
	});
	$.fancybox.open(opts);
}

function openModalTakeForCache() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#take-for-cash-modal',
	});
	$.fancybox.open(opts);
}

function openModalBookNewAuto() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#book-new-auto-modal',
	});
	$.fancybox.open(opts);
}

function openModalGetDiscountOffer() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#get-discount-offer-modal',
	});
	$.fancybox.open(opts);
}

function openModalGetSpecialOffer() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#get-special-offer-modal',
	});
	$.fancybox.open(opts);
}

function openModalConsultationAutocredit() {
	var opts = $.extend({}, fancyDefaultOptions, {
		src: '#consultation-autocredit-modal',
	});
	$.fancybox.open(opts);
}
jQuery(function ($) {
	$('.js-open-modal-success-form').on('click', function () {
		openModalSuccessForm();
	});
	$('.js-open-modal-test-drive').on('click', function () {
		openModalTestDrive();
	});

	$('.js-open-modal-get-in-credit').on('click', function () {
		openModalGetInCredit();
	});

	$('.js-open-modal-take-for-cash').on('click', function () {
		openModalTakeForCache();
	});
	$('.js-open-modal-book-new-auto').on('click', function () {
		openModalBookNewAuto();
	});
	$('.js-open-modal-get-discount-offer').on('click', function () {
		openModalGetDiscountOffer();
	});
	$('.js-open-modal-get-special-offer').on('click', function () {
		openModalGetSpecialOffer();
	});
	$('.js-open-modal-consultation-autocredit').on('click', function () {
		openModalConsultationAutocredit();
	});
});
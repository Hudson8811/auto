/* header */
$(window).scroll(function() {
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
	$('.row-select').css({"height":"unset","max-height":"unset"});
});
$(".filter-show-more.open").click(function () {
	$(this).fadeOut(0);
	$('.filter-show-more.close').fadeIn(0);
	$('.row-select').css({"height":"4em","max-height":"4em"});
});




/* three-forms */
$(".three-forms-show-more.close").click(function () {
	$(this).fadeOut(0);
	$(this).siblings('.three-forms-show-more.open').fadeIn(0);
	$(this).siblings('.text-show-more').css({"height":"unset","max-height":"unset"});
});
$(".three-forms-show-more.open").click(function () {
	$(this).fadeOut(0);
	$(this).siblings('.three-forms-show-more.close').fadeIn(0);
	$(this).siblings('.text-show-more').css({"height":"80px","max-height":"none"});
});




/* brandnames */
$(".brandname .showMore-btn").click(function () {
	$(this).toggleClass('closed');
	$(this).siblings('.showMore-box').toggleClass('closed').toggleClass('open');
});


$('.js-slider-banks').slick({
	slidesToShow:8,
	slidesToScroll:8,
	responsive:[
		{breakpoint:1024,settings:{slidesToShow:6,slidesToScroll:6}},
		{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:4}},
		{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:4}},
		{breakpoint:400,settings:{slidesToShow:2,slidesToScroll:2}}
	],
	rows:2,
});


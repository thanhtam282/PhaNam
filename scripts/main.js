////// GLOBAL ////////
function display_search() {
	$('.search').click(function () {
		$('.searchbox').toggleClass('active')
	})
}
const navMapping = () => {
	return new MappingListener({
		selector: 'ul.nav.social',
		mobileWrapper: '.sidemenu',
		mobileMethod: 'appendTo',
		desktopWrapper: '.canhcam-header-1 .mainnav .nav-top',
		desktopMethod: 'appendTo',
		breakpoint: 992
	}).watch();
}
const navMapping_lang = () => {
	return new MappingListener({
		selector: '.language',
		mobileWrapper: '.sidemenu',
		mobileMethod: 'appendTo',
		desktopWrapper: '.canhcam-header-1 .mainnav .nav-top',
		desktopMethod: 'appendTo',
		breakpoint: 992
	}).watch();
}

function slider_banner() {
	if ($('.canhcam-banner-1 .list-items').length) {
		$(".canhcam-banner-1 .list-items").slick({
			autoplay: true,
			// slickPlay: true,
			// slickPause: true,
			autoplaySpeed: 4000,
			dots: true,
			infinite: true,
			speed: 300,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			// customPaging: function(slider, i) {
			//     var thumb = $(slider.$slides[i]).data('thumb');
			//     return '<a><p> ' + thumb + '</p></a>';
			// },
		});
	}

};

$(function () {
	$('.canhcam-header-1 .btn-open-menu').on('click', function () {
		$('.canhcam-header-1 .btn-open-menu').toggleClass('active')
		$('.sidemenu').toggleClass('active')
		$('.canhcam-header-1 .nav-bottom').toggleClass('active')
		$(' .sidemenu-backdrop').toggleClass('active')
	})
	$(' .sidemenu-backdrop').on('click', function () {
		$('.canhcam-header-1 .btn-open-menu').toggleClass('active')
		$('.sidemenu').toggleClass('active')
		$('.canhcam-header-1 .nav-bottom').toggleClass('active')
		$(' .sidemenu-backdrop').toggleClass('active')
	})
})
////// END OF GLOBAL ////////


function slider_home() {
	if ($('.canhcam-slider-1 .list-items').length) {
		$(".canhcam-slider-1 .list-items").slick({
			autoplay: false,
			// slickPlay: true,
			// slickPause: true,
			autoplaySpeed: 4000,
			dots: true,
			infinite: true,
			speed: 300,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			// customPaging: function(slider, i) {
			//     var thumb = $(slider.$slides[i]).data('thumb');
			//     return '<a><p> ' + thumb + '</p></a>';
			// },
		});
	}

};

///////// MAIN Control /////
$(document).ready(function () {
	// $('.canhcam-news-photo-1  .box-zoom a').fancybox({
	// 	width: 640,
	// 	height: 400,
	// 	type: 'iframe'
	// });



// 	$(".canhcam-news-photo-1  .box-zoom").lightGallery({
// 	thumbnail: true,
// 	selector: 'a'
// });
	/// GLOBAL ///

	/// END GLOBAL ///
	/// HEADER ///
	display_search();
	navMapping();
	navMapping_lang();
	// slider_banner();

	/// END HEADER ///
	slider_home();


});
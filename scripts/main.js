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
		desktopWrapper: '.phanam-header-1 .mainnav .nav-top',
		desktopMethod: 'appendTo',
		breakpoint: 992
	}).watch();
}
const navMapping_lang = () => {
	return new MappingListener({
		selector: '.language',
		mobileWrapper: '.sidemenu',
		mobileMethod: 'appendTo',
		desktopWrapper: '.phanam-header-1 .mainnav .nav-top',
		desktopMethod: 'appendTo',
		breakpoint: 992
	}).watch();
}

function slider_banner() {
	if ($('.phanam-banner-1 .list-items').length) {
		$(".phanam-banner-1 .list-items").slick({
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
	$('.phanam-header-1 .btn-open-menu').on('click', function () {
		$('.phanam-header-1 .btn-open-menu').toggleClass('active')
		$('.sidemenu').toggleClass('active')
		$('.phanam-header-1 .nav-bottom').toggleClass('active')
		$(' .sidemenu-backdrop').toggleClass('active')
	})
	$(' .sidemenu-backdrop').on('click', function () {
		$('.phanam-header-1 .btn-open-menu').toggleClass('active')
		$('.sidemenu').toggleClass('active')
		$('.phanam-header-1 .nav-bottom').toggleClass('active')
		$(' .sidemenu-backdrop').toggleClass('active')
	})
})
////// END OF GLOBAL ////////


var slider_home = () => {
	if ($('.phanam-slider-1 .list-items').length) {
		$(".phanam-slider-1 .list-items").slick({
			autoplay: false,
			// slickPlay: true,
			// slickPause: true,
			autoplaySpeed: 4000,
			dots: false,
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


var  setHeightH3 = () => {
	var maxHeight = 0;

	$('.phanam-intro-about-us-3 .block-wrapper .info-wrapper').each(function () {
		var thisH = $(this).height();
		if (thisH > maxHeight) {
			maxHeight = thisH;
		}
	});
	$('.phanam-intro-about-us-3 .block-wrapper .banner-info-wrapper').height(maxHeight)
	$('.phanam-intro-about-us-3 .block-wrapper .info-wrapper').height(maxHeight)
}







///////// MAIN Control /////
$(document).ready(function () {
	// $('.phanam-news-photo-1  .box-zoom a').fancybox({
	// 	width: 640,
	// 	height: 400,
	// 	type: 'iframe'
	// });



	// 	$(".phanam-news-photo-1  .box-zoom").lightGallery({
	// 	thumbnail: true,
	// 	selector: 'a'
	// });
	/// GLOBAL ///
	AOS.init();

	/// END GLOBAL ///
	/// HEADER ///
	display_search();
	navMapping();
	navMapping_lang();
	// slider_banner();

	/// END HEADER ///
	if ($(window).width() < 768 ){
		setHeightH3()
		
	}
});
$(window).resize(function () { 
	if ($(window).width() < 768 ){
		setHeightH3()
		
	}
	
});

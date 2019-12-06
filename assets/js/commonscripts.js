
$('#testimonials').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
			'<span aria-label="' + 'Previous' + '"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
			'<span aria-label="' + 'Next' + '"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
		],
    responsive: {
      600: {
        items: 3
      }
    }
  });

  $('#paymentSolutions').owlCarousel({
    margin: 10,
    nav: false,
    dots: true,
    items: 1
  });
$('.modal-wrapper').on('click', function(e) {
	if (e.target === this) {
		$(this).removeClass('modal-wrapper_visible');
	}
})
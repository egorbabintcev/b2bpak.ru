$('.button').on('click', function(e) {	
	if (e.target.dataset.action === 'toggle' && e.target.dataset.target === 'modal') {
		$('.modal-form__input').val('');		
		$('.modal-wrapper').addClass('modal-wrapper_visible');		
	}
})
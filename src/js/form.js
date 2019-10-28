$('form').on('submit', function(event) {
	event.preventDefault();
	const data = $(this).serialize();
	$.ajax({
		url: '/php/contacts.php',
		type: 'POST',
		data: data,
		success: () => {
			alert('Данные успешно переданы. Спасибо, что обратились к нам! Специалист свяжется с вами в ближайшее время.')
		},
		error: () => {
			alert('Произошла ошибка при передаче данных. Пожалуйста, попоробуйте еще раз.')
		}
	})
})

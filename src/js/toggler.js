module.exports = function(toggler, menu) {
	toggler.on('click', function(e) {
		// $(this).find(`${{this.class}}`)
		$('.nav-toggler__icon').toggleClass('fa-angle-up');
		$('.nav-toggler__icon').toggleClass('fa-angle-down');
		menu.toggleClass('hidden');
	})
}
(function ($) {
	$.fn.alert = function () {
		var self = this;

		this.$close = self.find('.alert__close');

		this.$close.on('click', function () {
			var $alert = $(this).parent('.alert');

			$alert.fadeOut();
		});
	};
})(jQuery);
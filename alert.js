(function ($) {
	$.fn.alert = function (action) {
		var self = this;

		// default action is fade
		action = action || 'fade';

		// current close element
		this.$close = self.find('.alert__close');

		// click event on close element
		this.$close.on('click', function () {

			// trigger before close
			self.trigger('close');

			// current alert element
			var $alert = $(this).parent('.alert');

			// animate alert to hide
			$alert.fadeOut(function () {

				// trigger after close
				self.trigger('closed');

				// remove alert if requested
				if (action == 'remove') {
					$alert.remove();
				}
			});
		});

		return this;
	};
})(jQuery);
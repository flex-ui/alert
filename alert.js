(function ($) {
	$.fn.alert = function (action) {
		var self = this;

		// by default dom won't be removed
		action = action || false;

		// current close element
		this.$close = self.find('.alert__close');

		// click event on close element
		this.$close.on('click', function (e) {

			// current alert element
			var $alert = $(this).parent('.alert');

			// trigger before close
			$alert.trigger('close', $alert[0]);

			// animate alert to hide
			$alert.fadeOut(function () {

				// trigger after close
				$alert.trigger('closed', $alert[0]);

				// remove alert if requested
				if (action === true) $alert.remove();
			});

			e.preventDefault();
		});

		return this;
	};
})(jQuery);
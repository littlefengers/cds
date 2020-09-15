import $ from "jquery";
/**
 * Utility function to give an interactive character count down. 
 * Pass the jquery obj where you want the countdown to reflect. 
 * Pass a 'text' input (input[type='text'],textarea) to count.
 * @param  {[object]} 
 * @param  {[object]}
 * @return {[void]}
 */
function character_count(label, textarea) { 
	if ($(label).length > 0 && $(textarea).length > 0) {
		var max = parseInt($(textarea).attr('maxlength'));

		$(label).text(max - $(textarea).val().length);
		$(textarea).on('input', function() { 
			updateLabelCount(this, label);
		});
		function updateLabelCount(textarea, label) { 
			var count = $(textarea).val().length;
			$(label).text(max - count);
		}
	}
}

export {character_count};



$(document).ready(function() {
	
	$('form').submit(function(evt) {
		evt.preventDefault();

		// take input from search field and submit button
		var $searchField = $('#search');
		var $submitButton = $('#submit');

		$searchField.prop('disabled', true);
		$submitButton.attr('disabled', true).val('searching....');

		var flikrApi = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		var animal = $searchField.val();
		var flikrOptions = {
			tags: animal,
			format: 'json'
		};
		function displayPhotos(data) {
			var photoHtml = '<ul>';

			$.each(data.items, function(index, photo) {
				photoHtml += '<li class="grid-25 tablet-grid-50">';
				photoHtml += '<a href="' + photo.link + '" class="image">';
				photoHtml += '<img src="' + photo.media.m + '"></a></li>';
			});
			
			photoHtml += '</ul>';
			$('#photos').html(photoHtml);

			$searchField.prop('disabled', false);
			$submitButton.attr('disabled', false).val('search');

		}
		$.getJSON(flikrApi, flikrOptions, displayPhotos);
	});
});
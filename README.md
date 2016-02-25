# Photo search project by using AJAX and flikr api
![Image of Project](/img/ajax-flikr1.png)

Live Demo: [Link](http://emran04.github.io/ajax-basic-flikr-api)

### Featurs
* Used jQuery for ajax funtionality.
* Used getJSON method of jQuery.

```javascript
$('form').submit(function(evt) {
	evt.preventDefault();

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
```
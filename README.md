# Redactor feature image plugin
[Redactor](https://imperavi.com/redactor/) plugin for adding feature image using redactor image modal

## Usage

### JavaScript
```javascript
$('#redactor').redactor({
    imageUpload: '/administrator/uploads',
    plugins: ['featureimage'],
	
	featureimage: {
		/* feature image link */
		linkSelector: '.redactor-featureimage'
		/* set preview area */
		previewSelector: '.feature-image-preview', 

		/* set input area */
		inputSelector: '.feature-image-input',
	}
});
```

### HTML
```html
<div class="feature-image-container">
	<div class="feature-image-preview"><!-- saved feature image --></div>
	<div class="feature-image-link"><a href="#" class="redactor-featureimage">Set feature image</a></div>
	<input type="hidden" name="featureimage" class="feature-image-input">
</div>
```
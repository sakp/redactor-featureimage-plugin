# Redactor feature image plugin
[Redactor](https://imperavi.com/redactor/) plugin for adding feature image using redactor image modal

## configuration

```javascript
$('#redactor').redactor({
    imageUpload: '/administrator/uploads',
    plugins: ['featureimage'],

    /* set preview area */
    featureimage_preview: '.feature-image-preview', 

    /* set input area */
    featureimage_input: '.feature-image-input',     
});
```

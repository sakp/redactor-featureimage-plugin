(function($)
	$.Redactor.prototype.featureimage = function()
	{
		return {
			opts: {
				featureimage: {
					linkSelector    : '.redactor-featureimage'
					previewSelector : '.feature-image-preview',
					inputSelector   : '.feature-image-input',
				}
			}
			init: function()
			{
				if (!this.opts.imageManagerJson) return;
				var _this = this;

				/* merge settings */
				this.opts = $.extend({}, this.featureimage.opts, this.opts);

				$(this.opts.featureimage.linkSelector).on('click', function(e){
					e.preventDefault();

					_this.modal.addTemplate('featureimage', _this.modal.getTemplate('image'));

					_this.modal.load('featureimage', "Feature Image", 700);

					/* callback after uploaded */
					_this.upload.init('#redactor-modal-image-droparea', _this.opts.imageUpload, _this.featureimage.insert);
					_this.selection.save();

					_this.modal.show();
					$('#redactor-modal-image-droparea').focus();
				});
				
			},
			insert: function(json, direct, e){
				$(this.opts.featureimage.previewSelector).html('<img src="' + json.url + '">');
				$(this.opts.featureimage.inputSelector).val(json.url);
				this.modal.close();
			}
		};
	};
})(jQuery);
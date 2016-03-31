(function($)
	$.Redactor.prototype.featureimage = function()
	{
		return {
			init: function()
			{
				if (!this.opts.imageManagerJson) return;
				var _this = this;

				$('.redactor-featureimage').on('click', function(e){
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
				$(this.opts.featureimage_preview).html('<img src="' + json.url + '">');
				$(this.opts.featureimage_input).val(json.url);
				this.modal.close();
			}
		};
	};
})(jQuery);
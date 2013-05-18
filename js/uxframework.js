/* 
** uxFramework - v1.0.1 [2013-05-14]
** Copyright © 2013 evo2mind under MIT Licensed 
*/


/*
**  uxFramework Utils
*/






/*
**  uxFramework Widget
*/

ux = window.ux = window.ux || {};
ux.version = '1.0.0';

$(function() {
	$.widget('custom.uxTextbox', {
		version: ux.version,
		defaultElement: '<input>',
		widgetEventPrefix: 'uxTextbox',
		options: {
		    culture: null,
		    isRequired: false,
		    inputInfo: null,
		    inlineInputTitle: null,
		    validators: null
		},
		_create: function() {
		    this._setOption( 'isRequired', this.options.isRequired );
//		    this._setOption( 'inputInfo', this.options.inputInfo );
//		    this._setOption( 'inlineInputTitle', this.options.inlineInputTitle );
		    this._draw();
		    this._on(this._events);
		    this._refresh();
//			/this._showErrorValidation();
			//this.options.validator();
		},
		_draw: function() {
			var elementClasses = this.element.attr('class'),
			    uxTextbox = this.uxTextbox = this.element
				                .removeAttr('class')
				                .addClass('ux-input ui-helper-reset')
				                .wrap(this._uxTextboxHtml)
			                        .before(this._uxInformationHtml())
				                    .before(this._uxValidationHtml())
				                        .wrap(this._uxInputWrapper)
				                .after(this._uxInputInlineTitleHtml())
		                        .parents('.ux-widget')
		                            .addClass(elementClasses);
		},
		_events: {
		    keydown: function(event) {
			    this._hideInputInlineTitle();
			    this._hideErrorValidation();
		    },
		    paste: function(event) {
			    this._hideInputInlineTitle();
			    this._hideErrorValidation();
		    },
		    blur: function(event) {
			    if(this.element.val() === ''){
			        this._showInputInlineTitle();
				    if (this.options.isRequired) {
					    this._showErrorValidation();
				    }
			    }
		    },
		    change: function() {
//                if (this.options.validator) {
//	                this._showErrorValidation();
//                } else {
//	                this._hideErrorValidation();
//                }
		    }
		},
		_uxTextboxHtml: function() {
			return  '<div class="ux-widget ux-textbox ui-widget-content ui-helper-reset" ></div>';
		},
		_uxInputWrapper: function() {
			return '<div class="ux-textbox-input"></div>';
		},
		_uxInputInlineTitleHtml: function() {
			var element = $('<span class="ux-textbox-input-inline-title"></span>')
                .html(this.options.inlineInputTitle != null ? this.options.inlineInputTitle : null)
				.on('click', function() {
					$(element)
						.prev()
						    .focus();
					
				});
		    return element;
		},
		_uxInformationHtml: function() {
			return  this.options.inputInfo != null ? 
				    '<div class="ux-widget-info ux-textbox-info ui-helper-reset" style="float: right" ' + 'title="' + this.options.inputInfo + '" >' +
				        '<span class="ui-icon ui-icon-info" style="margin: 1px auto"></span>' +
				    '</div>' : null;
		},
		_uxValidationHtml: function() {
			return  '<div class="ux-textbox-validation ux-validation ui-state-error" >' +
				        '<span class="ui-icon ui-icon-notice"></span>' +
				    '</div>';
		},
		_showInputInlineTitle: function() {
	    	 this.element
			        .next('.ux-textbox-input-inline-title')
			        .removeClass('ui-helper-hidden');
		},
		_hideInputInlineTitle: function() {
	    	this.element
		        .next('.ux-textbox-input-inline-title')
		        .addClass('ui-helper-hidden');
		},
		_showErrorValidation: function() {
		    this.element
			        .parents('.ux-widget')
			        .addClass('ui-state-error');
		},
		_hideErrorValidation: function() {
		    this.element
			        .parents('.ux-widget')
			        .removeClass('ui-state-error');
		},
		_addValidationErrorMessage: function(message) {
			this.element
				    .parents('.ux-widget')
				    .children('.ux-textbox-validation')
				    .attr('title', message);    
		},
		_refresh: function() {
			if (this.element.val() == '') {
				this._showInputInlineTitle();
			} else {
				this._hideInputInlineTitle();
			}
		},
		_setOption: function(key, value) {
		    if (key !== '') {
			    
		    }
		},
		_destroy: function() {
		
		},
		widget: function() {
		    return this.uxTextbox;
	    }
	});

});


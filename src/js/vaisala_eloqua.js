(function ($, Drupal) {
  'use strict';

  /**
   * Submit form with AJAX.
   */
  Drupal.behaviors.eloquaFormAjaxify = {
    attach: function (context, settings) {
      if ($('.elq-form', context).length) {
        var $form = $('form.elq-form', context);

        $('.sc-view .submit-button', $form).click(function(e) {
          var objs = [];

          // Mass validate form fields before submitting.
          $('[id^="field"]', $form).filter(function() {
                return this.id.match(/\d+$/);
              }
          ).each(function() {
            var obj = window[$(this).attr('id')];

            // Check that object isn't a DOM element.
            if (typeof obj.tagName == 'undefined') {
              objs.push(obj);
            }
          });

          var formMassValidity = LiveValidation.massValidate(objs);


          if (formMassValidity === true) {
            // e.preventDefault();

            // var nid = $(this).parents('article.node--type-eloqua').attr('data-id');

            // var form = $(this).parents('form.elq-form');
            // var values = form.serialize();

            // $.ajax({
            //   type: "POST",
            //   url: form.attr('action'),
            //   data: values,
            //   success: function(data) {
            //     window.location.href = drupalSettings.eloqua[nid].redirectURL;
            //   },
            //   error: function() {
            //     console.log(datastring);
            //     console.log(form.attr('action'));
            //     console.log('Error submitting form.');
            //   }
            // });
          } else {
            $('html, body').animate({
              'scrollTop':  $('.LV_invalid:first', $form).offset().top - 200
            }, 800, 'swing');
          }
        });
      }
    }
  };



  /**
   * Eloqua form manipulations
   */
  Drupal.behaviors.vaisalaEloqua = {
    attach: function (context, settings) {
      if ($('.elq-form', context).length) {
        settings.chosen = settings.chosen || drupalSettings.chosen;
        var $context = $('.elq-form', context);

        $('select:not([name=country],[name=stateProv])', $context).chosen({
          "disable_search": true,
          "width": "300px"
        });

        // Hide wrappers for hidden fields.
        $('input[type="hidden"]', $context).parents('.sc-view').hide();

        // Attach Chosen on Eloqua forms.
        settings.chosen.options.width = "300px";
        $('select', $context).chosen(settings.chosen.options);

        // Remove padding-top from textarea labels...
        $('label', $context).each(function() {
          var $parent = document.getElementById($(this).attr('for'));
          if ($parent !== null) {
            if ($parent.tagName == 'TEXTAREA') {
              $(this).attr('style', 'padding-top: 0px !important');
            }
          }
        });

        /* Trigger single checkbox to be selected on label click */
        $('.checkbox-label').each(function() {
          var $input = $(this).siblings('input');

          $(this).attr('for', $input.attr('name'));
          $(this).click(function() {
            $input.trigger('click');
          });


        });

        $('input[type="submit"]', $context).css({
          'background-position': ($('input[type="submit"]', $context).outerWidth() - 40) + 'px center'
        });

        $('span.radio-option').each(function(i) {
          $(this).addClass($('input:first-child', $(this)).attr('type'));
        });
      }
    }
  };

})(jQuery, Drupal);

(function ($, Drupal) {
  'use strict';

  /**
   * Eloqua form prepopulation.
   */
  Drupal.behaviors.eloquaPrepopulate = {
    attach: function (context, settings) {
      function isUsOrCa(val) {
        return ['US', 'CA'].includes(val);
      }

      function isCaState(val) {
        return [
          'Alberta',
          'Manitoba',
          'British Columbia',
          'New Brunswick',
          'Newfoundland and Labrador',
          'Nova Scotia',
          'Northwest Territories',
          'Nunavut',
          'Ontario',
          'Prince Edward Island',
          'Quebec',
          'Saskatchewan',
          'Yukon Territory'].includes(val);
      }


      if ($('select[name=country]').length) {


        var countrySelect = $('select[name=country]');
        var stateProv = $('select[name=stateProv]');
        stateProv.closest('.form-element-layout').hide();

        countrySelect.on('change', function (e) {
          if (isUsOrCa($(e.target).val())) {
            stateProv.find('option:first').removeAttr('value');
            stateProv.find('option[value=Other]').prop('selected', false);
            stateProv.find('option:first').prop('selected', true);
            stateProv.closest('.form-element-layout').show();
          } else {
            stateProv.find('option:first').prop('value', function () {
              return $(this).text()
            });
            stateProv.find('option[value=Other]').prop('selected', false);
            stateProv.find('option:first').prop('selected', true);
            stateProv.closest('.form-element-layout').hide();
          }
        });

        countrySelect.siblings('.chosen-container').on('mousedown', function (e) {
          var separator = countrySelect.siblings('.chosen-container').find('.chosen-results li:contains("--------------")');
          separator.prevAll().add(separator).hide();
        });

        stateProv.siblings('.chosen-container').on('mousedown', function (e) {
          if (isUsOrCa(countrySelect.val())) {
            stateProv.siblings('.chosen-container').find('.chosen-results li:contains("Other - not US or CA")').hide();

            var isCaSelected = countrySelect.val() === 'CA';
            stateProv.siblings('.chosen-container').find('.chosen-results li').each(function () {
              var isCurrentCaState = isCaState($(this).text());
              $(this).css('display', isCaSelected && isCurrentCaState || !isCaSelected && !isCurrentCaState ? null : 'none');
            });
          } else {
            stateProv.siblings('.chosen-container').find('.chosen-results li:contains("Other - not US or CA")').show();
          }
        });

        stateProv.siblings('.chosen-container').find('.chosen-search-input').on('keyup', function (e) {
          stateProv.siblings('.chosen-container').find('.chosen-results').html(
              stateProv.siblings('.chosen-container').find('.chosen-results li').sort(function (a, b) {
                var contentA = $(a).text();
                var contentB = $(b).text();
                return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
              }).filter(function () {
                var isCaSelected = countrySelect.val() === 'CA';
                var isCurrentCaState = isCaState($(this).text());
                if (isCaSelected && !isCurrentCaState || !isCaSelected && isCurrentCaState || $(this).text() === 'Other - not US or CA') {
                  return false;
                }

                return !!!$(this).prevAll().filter(':contains("' + $(this).text() + '")').length;
              })
          );
        });

        countrySelect.siblings('.chosen-container').find('.chosen-search-input').on('keyup', function (e) {
          countrySelect.siblings('.chosen-container').find('.chosen-results').html(
              countrySelect.siblings('.chosen-container').find('.chosen-results li').sort(function (a, b) {
                var contentA = $(a).text();
                var contentB = $(b).text();
                return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
              }).filter(function () {
                return !!!$(this).prevAll().filter(':contains("' + $(this).text() + '")').length;
              })
          );
        });

      }


      if ($('.elq-form').length) {
        Drupal.behaviors.eloquaPrepopulate.progressiveTimer;

        /*Reset the fields*/
        Drupal.behaviors.eloquaPrepopulate.reset_form();

        _elqQ.push(['elqDataLookup', escape('6329df2c2f8749a984eaba873f88ae2a'), '']);

        /*Web Visitor Lookup*/
        Drupal.behaviors.eloquaPrepopulate.checkForExistence('GetElqContentPersonalizationValue', 'Drupal.behaviors.eloquaPrepopulate.SetElqContent');


        // if (config.mode === 'staged') {
        //   $('.pp-stage').find('input, select, textarea').off('change.eloqua keyup.eloqua').on('change.eloqua keyup.eloqua', function() {
        //     var currentStage = $(this).closest('.pp-stage');
        //     var currentStages = currentStage.parent().children('.pp-stage');
        //     var currentStageIndex = currentStages.index(currentStage);
        //     if(currentStageIndex + 1 < currentStages.length) {
        //       if (fieldHasValue(currentStage[0]) || fieldHasValue(currentStages[currentStageIndex + 1])) {
        //         showGroup(currentStages[currentStageIndex + 1], currentStageIndex + 1);
        //       } else {
        //         hideGroup(currentStages[currentStageIndex + 1], currentStageIndex + 1);
        //       }
        //     }
        //   });
        // }
      }
    },

    setInitialCountrySelectValue: function () {

      var countrySelect = $('select[name=country]');

      if (!countrySelect.length) return;


      $.ajax({
        url: 'https://get.geojs.io/v1/ip/country',
        success: function (code) {
          setTimeout(function () {
            var option = countrySelect.find('option[value=' + code + ']:first');
            option.prop('selected', 'selected');
            countrySelect.change();
            countrySelect.siblings('.chosen-container').find('.chosen-single > span').text(option.text());
          }, 300);
        }
      });
    },

    reset_form: function() {
      var $form = $('.elq-form');
      $('input[type="text"]', $form).val('');
      $('textarea', $form).val('');
      $('input[type=select]', $form).val('');
      $('input[type=radio]', $form).attr('checked', false);
      $('input[type=checkbox]', $form).attr('checked', false);
      $('input[name=opt-in]', $form).val('on');

      // Add redirectURL value, if it exists
      var nid = $('article.node--type-eloqua').attr('data-id');
      if (typeof drupalSettings.eloqua[nid] !== 'undefined' && typeof drupalSettings.eloqua[nid].redirectURL !== 'undefined') {
        $('input[name=redirectURL]').val(drupalSettings.eloqua[nid].redirectURL);
      }
    },

    /**
     * Wait for continuing the script until the needed function is loaded.
     * @param  string functionToCheck [description]
     * @param  string functionToCall  [description]
     */
    checkForExistence: function(functionToCheck, functionToCall) {
      var functionToCheck = Drupal.behaviors.eloquaPrepopulate.splitNamespace(functionToCheck);
      var functionToCall = Drupal.behaviors.eloquaPrepopulate.splitNamespace(functionToCall);

      var counter = 0;

      var checkExist = setInterval(function() {
        if (typeof functionToCheck.context[functionToCheck.name] == 'function') {
          clearInterval(checkExist);
          // Continue.
          functionToCall.context[functionToCall.name]();
        } else {
          counter++;
          // Prevent infinite loop.
          if (counter == 30) {
            console.log('I give up, ' + functionToCheck.name + ' does not exist');
            clearInterval(checkExist);

            Drupal.behaviors.eloquaPrepopulate.progressiveForms();
          }
        }
      }, 50);
    },

    /**
     * Helper function for splitting the function name and namespace.
     * @param  string functionToSplit [description]
     * @return object                 [description]
     */
    splitNamespace: function(functionToSplit) {
      var namespaces = functionToSplit.split(".");
      var func = namespaces.pop();
      var context = window;
      for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
      }

      return {
        'context': context,
        'name': func
      };
    },

    SetElqContent: function() {
      _elqQ.push(['elqDataLookup', escape('554c325d827d426b8f6c317327be976b'), '<C_EmailAddress>' + GetElqContentPersonalizationValue('V_Email_Address') + '</C_EmailAddress>']);

      setTimeout(function() {

        Drupal.behaviors.eloquaPrepopulate.SetElqContactContent();
      }, 500);
    },

    /**
     * Prepopulate form fields.
     */
    SetElqContactContent: function() {
      if (typeof GetElqContentPersonalizationValue == 'function') {
        $( "input[name=emailAddress]" ).val(GetElqContentPersonalizationValue('C_EmailAddress'));
        $( "input[name=firstName]" ).val(GetElqContentPersonalizationValue('C_FirstName'));
        $( "input[name=lastName]" ).val(GetElqContentPersonalizationValue('C_LastName'));
        $( "input[name=title]" ).val(GetElqContentPersonalizationValue('C_Title'));
        $( "input[name=busPhone]" ).val(GetElqContentPersonalizationValue('C_BusPhone'));
        if($( "input[name=busPhone]" ).closest('.pp-stage').length) {
          $( "input[name=busPhone]" ).attr('data-previous',  $( "input[name=busPhone]" ).val());
        }

        $( "input[name=company]" ).val(GetElqContentPersonalizationValue('C_Company'));
        if($( "input[name=company]" ).closest('.pp-stage').length) {
          $( "input[name=company]" ).attr('data-previous',  $( "input[name=company]" ).val());
        }

        if (GetElqContentPersonalizationValue('C_Industry1') != '') {
          $("select[name=industry1]").val(GetElqContentPersonalizationValue('C_Industry1'));
          $("select[name=industry1]").trigger("chosen:updated");
        }

        var C_Country = GetElqContentPersonalizationValue('C_Country');
        $( "select[name=country]" ).attr('data-previous', '');

        if (C_Country != '') {
          $("select[name=country]").val(C_Country);
          $("select[name=country]").trigger("chosen:updated");

          if($( "select[name=country]" ).closest('.pp-stage').length) {
            $( "select[name=country]" ).attr('data-previous',  C_Country);
          }
        }

        console.log('country previous set')

        var C_State_Prov = GetElqContentPersonalizationValue('C_State_Prov');
        $( "select[name=stateProv]" ).attr('data-previous', '');

        if (C_State_Prov != '') {
          $("select[name=stateProv]").val(C_State_Prov);
          $("select[name=stateProv]").trigger("chosen:updated");

          if($( "select[name=stateProv]" ).closest('.pp-stage').length) {
            $( "select[name=stateProv]" ).attr('data-previous',  C_State_Prov);
          }
        }

        console.log('stateProv previous set')



        if (GetElqContentPersonalizationValue('C_Interest_Area1') != '') { $("select[name=interestArea1]").val(GetElqContentPersonalizationValue('C_Interest_Area1'));
          $("select[name=interestArea1]").trigger("chosen:updated");
        }
        var optin = GetElqContentPersonalizationValue('C_OptIn');
        var double_optin = GetElqContentPersonalizationValue('C_SYS_Opt_in1');

        $('input[name="opt-in"]').val('on');

        if ( optin === "on" ){
          $('input[name=opt-in]').prop('checked', true);
        }

        if (double_optin === "on" && optin === "on" && $('form-design-field').length > 0) {
          $( "input[name=opt-in]" )
              .parentsUntil( "div.form-design-field" )
              .css( "visibility", "hidden" );
        }

        Drupal.behaviors.eloquaPrepopulate.progressiveForms();

        Drupal.behaviors.eloquaPrepopulate.setInitialCountrySelectValue();

      }
    },


    progressiveForms: function () {

      console.log('progressiveForms', revealed);

      if (typeof config != 'undefined') {
        if (config.mode === 'list') {


          if (revealed.length) {
            // Stop timer for revealing the progressive element wrapper.
            if (typeof Drupal.behaviors.eloquaPrepopulate.progressiveTimer != 'undefined') {
              clearTimeout(Drupal.behaviors.eloquaPrepopulate.progressiveTimer);
            }

            // Clear previous progressive actions == Hide the elements again.
            for (var i = 0; i < revealed.length; i++) {
              var pField = document.querySelector('#form' + config.formId + ' #epp' + revealed[i]);
              pField.style.display = 'none';
            }
            revealed = [];
          }


          var li, i, lookup = [];
          for(i=0;i<config.numFields;i++) {
            lookup[i]=i;
          }
          if (config.randomize) {
            var x,t;
            for(i=0;i<config.numFields;i++) {
              x=Math.floor(Math.random()*config.numFields);
              t=lookup[i];
              lookup[i] = lookup[x];
              lookup[x] = t;
            }
          }
          for (i = 0; i < config.numFields; i++) {
            li = lookup[i];
            if (revealed.length === config.numToReveal) break;
            if (revealed.indexOf(li + '') >= 0) continue;
            var pField = document.querySelector('#form' + config.formId + ' #epp' + li);
            if (!fieldHasValue(pField)) showField(pField, li);
          }
          if (revealed.length < config.numToReveal) {
            for (i = 0; i < config.numFields; i++) {
              li = lookup[i];
              if (revealed.length === config.numToReveal) break;
              if (revealed.indexOf(li + '') >= 0) continue;
              var pField = document.querySelector('#form' + config.formId + ' #epp' + li);
              if (!fieldHasValue(pField)) showField(pField, li);
            }
          }
          if (revealed.length < config.numToReveal) {
            for (i = 0; i < config.numFields; i++) {
              li = lookup[i];
              if (revealed.length === config.numToReveal) break;
              if (revealed.indexOf(li + '') >= 0) continue;
              var pField = document.querySelector('#form' + config.formId + ' #epp' + li);
              if (!config.onlyIncomplete) showField(pField, li);
            }
          }
        }
        else {

          hideAllGroups();

          var group;
          for (var i = 0; i < config.numStages; i++) {
            group = document.querySelector('#form' + config.formId + ' #pps' + i);
            console.log(group, groupHasPreviousValues(group))
            if (!groupHasPreviousValues(group) || (i === (config.numStages - 1))) {
              console.log('Show Group', group)
              showGroup(group, i);
              break;
            }
          }
        }
      }

      Drupal.behaviors.eloquaPrepopulate.progressiveTimer = setTimeout(function() {
        console.log('show group');
        var group = $('.elq-form .pp-group').fadeIn('fast');
      }, 1000);
    }
  };

})(jQuery, Drupal);

var hideAllGroups = function(){
  for (var i = 0; i < config.numStages; i++) {
    group = document.querySelector('#form' + config.formId + ' #pps' + i);
    hideGroup(group, i);
  }
}
var hideGroup = function(group, index) {
  var fields = [];
  fields = group.querySelectorAll('.pp-field');
  for(var i=0;i<fields.length;i++) {
    hideField(fields[i], index + '-' + i);
  }
};

var hideField = function(field, index) {
  field.style.display = 'none';

  var indexInArray = revealed.indexOf(index + '');
  if (indexInArray > -1) {
    revealed.splice(indexInArray, 1);
  }
};

var fieldHasValue = function(field, onlyPrev) {
  var input, textarea, select, hasValue;
  hasValue = false;
  input = field.querySelector('input');
  textarea = field.querySelector('textarea');
  select = field.querySelector('select');
  if (select) {
    hasValue = selectHasValue(select, field, onlyPrev);
  }
  else if (input) {
    if (input.type.indexOf('text') >= 0) {
      hasValue = textHasValue(input, field, onlyPrev);
    }
    else if (input.type.indexOf('radio') >= 0) {
      hasValue = radioHasValue(input, field, onlyPrev);
    }
    else if (input.type.indexOf('checkbox') >= 0) {
      hasValue = checkboxHasValue(input, field, onlyPrev);
    }
  }
  else if (textarea) {
    hasValue = textHasValue(textarea, field, onlyPrev);
  }
  return hasValue;
};

var textHasValue = function(input, field, onlyPrev) {
  var prev;
  var hasValue = false;
  if (!input.value || onlyPrev) {
    prev = getPreviousValue(input);
    if (prev) {
      input.value = prev;
      hasValue = true;
    }
    if (input.value.indexOf('<eloqua') !== -1 || input.value.indexOf('~~eloqua') !== -1) {
      input.value = '';
      hasValue = false;
    }
  }
  else {
    hasValue = true;
  }
  return hasValue;
};

var selectHasValue = function(input, field, onlyPrev) {
  var prev, prevVals;
  var hasValue = false;
  var nodes = input.options;
  prev = getPreviousValue(input);
  prevVals = prev.split(',');

  var selected = field.querySelector('.chosen-single span');


  if (selected && selected.firstChild.nodeValue.indexOf('--') === -1) {
    hasValue = true;
  }
  else {
    for (var i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].value && prevVals.indexOf(nodes[i].value) >= 0) {
        nodes[i].selected = "selected";
        hasValue = true;
      }
    }
  }
  return hasValue;
};




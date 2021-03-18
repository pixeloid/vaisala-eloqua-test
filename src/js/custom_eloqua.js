function handleFormSubmit(ele) {
  var submitButton = ele.querySelector('input[type=submit]');
  var spinner = document.createElement('span');
  spinner.setAttribute('class', 'loader');
  submitButton.setAttribute('disabled', true);
  submitButton.style.cursor = 'wait';
  submitButton.parentNode.appendChild(spinner);
  return true;
}

function resetSubmitButton(e) {
  var submitButtons = e.target.form.getElementsByClassName('submit-button');
  for (var i = 0; i < submitButtons.length; i++) {
    submitButtons[i].disabled = false;
  }
}

function addChangeHandler(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', resetSubmitButton);
  }
}

var form = document.getElementById('form2050');
addChangeHandler(form.getElementsByTagName('input'));
addChangeHandler(form.getElementsByTagName('select'));
addChangeHandler(form.getElementsByTagName('textarea'));
var nodes = document.querySelectorAll('#form2050 input[data-subscription]');
if (nodes) {
  for (var i = 0, len = nodes.length; i < len; i++) {
    var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription');
    if (status === 'true') {
      nodes[i].checked = true;
    }
  }
}
var nodes = document.querySelectorAll('#form2050 select[data-value]');
if (nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var selectedValue = node.dataset ? node.dataset.value : node.getAttribute('data-value');
    if (selectedValue) {
      for (var j = 0; j < node.options.length; j++) {
        if (node.options[j].value === selectedValue) {
          node.options[j].selected = 'selected';
          break;
        }
      }
    }
  }
}
this.getParentElement = function (list) {
  return list[list.length - 1].parentElement
};
var dom0 = document.querySelector('#form2050 #fe26593');
var fe26593 = new LiveValidation(dom0, {validMessage: "", onlyOnBlur: false, wait: 300});
fe26593.add(Validate.Presence, {failureMessage: "This field is required"});
fe26593.add(Validate.Format, {
  pattern: /(^[A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~][A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~\.]{0,62}@(([A-Z0-9](?:[A-Z0-9\-]{0,61}[A-Z0-9])?)(\.[A-Z0-9](?:[A-Z0-9\-]{0,61}[A-Z0-9])?)+)$)/i,
  failureMessage: "A valid email address is required"
});
fe26593.add(Validate.Format, {
  pattern: /\.\.|\.@/i,
  failureMessage: "A valid email address is required",
  negate: "true"
});
var dom1 = document.querySelector('#form2050 #fe26594');
var fe26594 = new LiveValidation(dom1, {validMessage: "", onlyOnBlur: false, wait: 300});
fe26594.add(Validate.Presence, {failureMessage: "This field is required"});
fe26594.add(Validate.Length, {
  tooShortMessage: "Invalid length for field value",
  tooLongMessage: "Invalid length for field value",
  minimum: 0,
  maximum: 35
});
fe26594.add(Validate.Custom, {
  against: function (value) {
    return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
  }, failureMessage: "Value must not contain any URL's"
});
var dom2 = document.querySelector('#form2050 #fe26595');
var fe26595 = new LiveValidation(dom2, {validMessage: "", onlyOnBlur: false, wait: 300});
fe26595.add(Validate.Presence, {failureMessage: "This field is required"});
fe26595.add(Validate.Length, {
  tooShortMessage: "Invalid length for field value",
  tooLongMessage: "Invalid length for field value",
  minimum: 0,
  maximum: 35
});
fe26595.add(Validate.Custom, {
  against: function (value) {
    return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
  }, failureMessage: "Value must not contain any URL's"
});
var dom3 = document.querySelector('#form2050 #fe26596');
var fe26596 = new LiveValidation(dom3, {validMessage: "", onlyOnBlur: false, wait: 300});
fe26596.add(Validate.Presence, {failureMessage: "This field is required"});
var ppv = {};
ppv['0-0'] = function () {
  var dom4_0_0 = document.querySelector('#form2050 #fe26589');
  var fe26589 = new LiveValidation(dom4_0_0, {validMessage: "", onlyOnBlur: false, wait: 300});
  fe26589.add(Validate.Presence, {failureMessage: "This field is required"});
};
ppv['0-1'] = function () {
  var dom4_0_1 = document.querySelector('#form2050 #fe26590');
  var fe26590 = new LiveValidation(dom4_0_1, {validMessage: "", onlyOnBlur: false, wait: 300});
  fe26590.add(Validate.Presence, {failureMessage: "This field is required"});
};
ppv['1-0'] = function () {
  var dom4_1_0 = document.querySelector('#form2050 #fe26591');
  var fe26591 = new LiveValidation(dom4_1_0, {validMessage: "", onlyOnBlur: false, wait: 300});
  fe26591.add(Validate.Custom, {
    against: function (value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    }, failureMessage: "Value must not contain any URL's"
  });
  fe26591.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe26591.add(Validate.Custom, {
    against: function (value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    }, failureMessage: "Value must not contain any URL's"
  });
  fe26591.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
};
ppv['2-0'] = function () {
  var dom4_2_0 = document.querySelector('#form2050 #fe26592');
  var fe26592 = new LiveValidation(dom4_2_0, {validMessage: "", onlyOnBlur: false, wait: 300});
  fe26592.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe26592.add(Validate.Custom, {
    against: function (value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    }, failureMessage: "Value must not contain any URL's"
  });
  fe26592.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe26592.add(Validate.Custom, {
    against: function (value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    }, failureMessage: "Value must not contain any URL's"
  });
};
var config = {
  formId: '2050',
  mode: 'staged',
  numStages: 3,
  numFields: 0,
  numToReveal: 4,
  randomize: false,
  onlyIncomplete: true
};
var revealed = [];
var getPreviousValue = function (elem) {
  var prev;
  if (elem.dataset) {
    prev = elem.dataset.previous;
  } else {
    prev = elem.getAttribute('data-previous');
  }
  return prev;
};
var showField = function (field, index) {
  field.style.display = '';
  revealed.push(index + '');
  var vf = ppv[index];
  if (vf) vf();
};
var textHasValue = function (input, field, onlyPrev) {
  var prev;
  var hasValue = false;
  if (!input.value || onlyPrev) {
    prev = getPreviousValue(input);
    if (prev) {
      input.value = prev;
      hasValue = true;
    }
  } else {
    hasValue = true;
  }
  return hasValue;
};
var radioHasValue = function (input, field, onlyPrev) {
  var prev, i, len;
  var hasValue = false;
  var nodes = field.querySelectorAll('input');
  if (!onlyPrev) {
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].checked) hasValue = true;
    }
  }
  if (!hasValue) {
    prev = getPreviousValue(input);
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].value && nodes[i].value === prev) {
        nodes[i].checked = true;
        hasValue = true;
      }
    }
  }
  return hasValue;
};
var checkboxHasValue = function (input, field, onlyPrev) {
  var prev, prevVals, i, len;
  var hasValue = false;
  var nodes = field.querySelectorAll('input');
  if (!onlyPrev) {
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].checked) hasValue = true;
    }
  }
  if (!hasValue) {
    prev = getPreviousValue(input);
    prevVals = prev.split(',');
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].value && prevVals.indexOf(nodes[i].value) >= 0) {
        nodes[i].checked = true;
        hasValue = true;
      }
    }
  }
  return hasValue;
};
var selectHasValue = function (input, field, onlyPrev) {
  var prev, prevVals;
  var hasValue = false;
  var nodes = input.options;
  if (!onlyPrev) {
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].value && nodes[i].selected) hasValue = true;
    }
  }
  if (!hasValue) {
    prev = getPreviousValue(input);
    console.log(prev, input)

    prevVals = prev.split(',');
    for (var i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].value && prevVals.indexOf(nodes[i].value) >= 0) {
        nodes[i].selected = "selected";
        hasValue = true;
      }
    }
  }
  return hasValue;
};
var fieldHasValue = function (field, onlyPrev) {
  var input, textarea, select, hasValue;
  hasValue = false;
  input = field.querySelector('input');
  textarea = field.querySelector('textarea');
  select = field.querySelector('select');
  if (input) {
    if (input.type.indexOf('text') >= 0) {
      hasValue = textHasValue(input, field, onlyPrev);
    } else if (input.type.indexOf('radio') >= 0) {
      hasValue = radioHasValue(input, field, onlyPrev);
    } else if (input.type.indexOf('checkbox') >= 0) {
      hasValue = checkboxHasValue(input, field, onlyPrev);
    }
  } else if (textarea) {
    hasValue = textHasValue(textarea, field, onlyPrev);
  } else if (select) {
    hasValue = selectHasValue(select, field, onlyPrev);
  }
  return hasValue;
};
var groupHasPreviousValues = function (group) {
  var fields = group.querySelectorAll('.pp-field');
  for (var i = 0; i < fields.length; i++) {
    if (fieldHasValue(fields[i], true)) return true;
  }
  return false;
};
var showGroup = function (group, index) {
  var fields = [];
  fields = group.querySelectorAll('.pp-field');
  for (var i = 0; i < fields.length; i++) {
    showField(fields[i], index + '-' + i);
  }
};
if (config.mode === 'list') {
  var li, i, lookup = [];
  for (i = 0; i < config.numFields; i++) {
    lookup[i] = i;
  }
  if (config.randomize) {
    var x, t;
    for (i = 0; i < config.numFields; i++) {
      x = Math.floor(Math.random() * config.numFields);
      t = lookup[i];
      lookup[i] = lookup[x];
      lookup[x] = t;
    }
  }
  for (i = 0; i < config.numFields; i++) {
    li = lookup[i];
    if (revealed.length === config.numToReveal) break;
    if (revealed.indexOf(li + '') >= 0) continue;
    pField = document.querySelector('#form' + config.formId + ' #epp' + li);
    if (!fieldHasValue(pField)) showField(pField, li);
  }
  if (revealed.length < config.numToReveal) {
    for (i = 0; i < config.numFields; i++) {
      li = lookup[i];
      if (revealed.length === config.numToReveal) break;
      if (revealed.indexOf(li + '') >= 0) continue;
      pField = document.querySelector('#form' + config.formId + ' #epp' + li);
      if (!fieldHasValue(pField)) showField(pField, li);
    }
  }
  if (revealed.length < config.numToReveal) {
    for (i = 0; i < config.numFields; i++) {
      li = lookup[i];
      if (revealed.length === config.numToReveal) break;
      if (revealed.indexOf(li + '') >= 0) continue;
      pField = document.querySelector('#form' + config.formId + ' #epp' + li);
      if (!config.onlyIncomplete) showField(pField, li);
    }
  }
} else {
  var group;
  for (var i = 0; i < config.numStages; i++) {
    group = document.querySelector('#form' + config.formId + ' #pps' + i);
    if (!groupHasPreviousValues(group) || (i === (config.numStages - 1))) {
      showGroup(group, i);
      break;
    }
  }
}
var dom5 = document.querySelector('#form2050 #fe26597');
var fe26597 = new LiveValidation(dom5, {validMessage: "", onlyOnBlur: false, wait: 300});

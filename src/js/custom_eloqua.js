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
var form = document.getElementById('form2930');
addChangeHandler(form.getElementsByTagName('input'));
addChangeHandler(form.getElementsByTagName('select'));
addChangeHandler(form.getElementsByTagName('textarea'));
var nodes = document.querySelectorAll('#form2930 input[data-subscription]');
if (nodes) {
  for (var i = 0, len = nodes.length; i < len; i++) {
    var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription');
    if (status === 'true') {
      nodes[i].checked = true;
    }
  }
}
;
var nodes = document.querySelectorAll('#form2930 select[data-value]');
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
this.getParentElement = function(list) {
  return list[list.length - 1].parentElement
};
var dom0 = document.querySelector('#form2930 #fe40635');
var fe40635 = new LiveValidation(dom0, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300
});
fe40635.add(Validate.Presence, {
  failureMessage: "This field is required"
});
fe40635.add(Validate.Format, {
  pattern: /(^[A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~][A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~\.]{0,62}@(([A-Z0-9](?:[A-Z0-9\-]{0,61}[A-Z0-9])?)(\.[A-Z0-9](?:[A-Z0-9\-]{0,61}[A-Z0-9])?)+)$)/i,
  failureMessage: "A valid email address is required"
});
fe40635.add(Validate.Format, {
  pattern: /\.\.|\.@/i,
  failureMessage: "A valid email address is required",
  negate: "true"
});
var dom1 = document.querySelector('#form2930 #fe40650');
var fe40650 = new LiveValidation(dom1, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300
});
fe40650.add(Validate.Presence, {
  failureMessage: "This field is required"
});
var dom2 = document.querySelector('#form2930 #fe40651');
var fe40651 = new LiveValidation(dom2, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300
});
fe40651.add(Validate.Presence, {
  failureMessage: "This field is required"
});
var ppv = {};
ppv['0-0'] = function() {
  var dom3_0_0 = document.querySelector('#form2930 #fe40636');
  var fe40636 = new LiveValidation(dom3_0_0, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40636.add(Validate.Presence, {
    failureMessage: "This field is required"
  });
  fe40636.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe40636.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    },
    failureMessage: "Value must not contain any URL's"
  });
};
ppv['0-1'] = function() {
  var dom3_0_1 = document.querySelector('#form2930 #fe40637');
  var fe40637 = new LiveValidation(dom3_0_1, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40637.add(Validate.Presence, {
    failureMessage: "This field is required"
  });
  fe40637.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe40637.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    },
    failureMessage: "Value must not contain any URL's"
  });
};
ppv['1-0'] = function() {
  var dom3_1_0 = document.querySelector('#form2930 #fe40646');
  var fe40646 = new LiveValidation(dom3_1_0, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40646.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    },
    failureMessage: "Value must not contain any URL's"
  });
  fe40646.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    },
    failureMessage: "Value must not contain any HTML"
  });
  fe40646.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe40646.add(Validate.Presence, {
    failureMessage: "This field is required"
  });
};
ppv['1-1'] = function() {
  var dom3_1_1 = document.querySelector('#form2930 #fe40647');
  var fe40647 = new LiveValidation(dom3_1_1, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40647.add(Validate.Presence, {
    failureMessage: "This field is required"
  });
};
ppv['1-2'] = function() {
  var dom3_1_2 = document.querySelector('#form2930 #fe40638');
  var fe40638 = new LiveValidation(dom3_1_2, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40638.add(Validate.Presence, {
    failureMessage: "This field is required"
  });
};
ppv['2-0'] = function() {
  var dom3_2_0 = document.querySelector('#form2930 #fe40649');
  var fe40649 = new LiveValidation(dom3_2_0, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40649.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    },
    failureMessage: "Value must not contain any URL's"
  });
  fe40649.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    },
    failureMessage: "Value must not contain any HTML"
  });
  fe40649.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
  fe40649.add(Validate.Presence, {
    failureMessage: "This field is required"
  });
};
ppv['2-1'] = function() {
  var dom3_2_1 = document.querySelector('#form2930 #fe40648');
  var fe40648 = new LiveValidation(dom3_2_1, {
    validMessage: "",
    onlyOnBlur: false,
    wait: 300
  });
  fe40648.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    },
    failureMessage: "Value must not contain any URL's"
  });
  fe40648.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    },
    failureMessage: "Value must not contain any HTML"
  });
  fe40648.add(Validate.Length, {
    tooShortMessage: "Invalid length for field value",
    tooLongMessage: "Invalid length for field value",
    minimum: 0,
    maximum: 35
  });
};
var config = {
  formId: '2930',
  mode: 'staged',
  numStages: 3,
  numFields: 0,
  numToReveal: 0,
  randomize: false,
  onlyIncomplete: false
};
var revealed = [];
var getPreviousValue = function(elem) {
  var prev;
  if (elem.dataset) {
    prev = elem.dataset.previous;
  } else {
    prev = elem.getAttribute('data-previous');
  }
  return prev;
};
var showField = function(field, index) {
  field.style.display = '';
  revealed.push(index + '');
  var vf = ppv[index];
  if (vf)
    vf();
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
  } else {
    hasValue = true;
  }
  return hasValue;
};
var radioHasValue = function(input, field, onlyPrev) {
  var prev,
      i,
      len;
  var hasValue = false;
  var nodes = field.querySelectorAll('input');
  if (!onlyPrev) {
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].checked)
        hasValue = true;
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
var checkboxHasValue = function(input, field, onlyPrev) {
  var prev,
      prevVals,
      i,
      len;
  var hasValue = false;
  var nodes = field.querySelectorAll('input');
  if (!onlyPrev) {
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].checked)
        hasValue = true;
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
var selectHasValue = function(input, field, onlyPrev) {
  var prev,
      prevVals;
  var hasValue = false;
  var nodes = input.options;
  if (!onlyPrev) {
    for (i = 0, len = nodes.length; i < len; i++) {
      if (nodes[i].value && nodes[i].selected)
        hasValue = true;
    }
  }
  if (!hasValue) {
    prev = getPreviousValue(input);
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
var fieldHasValue = function(field, onlyPrev) {
  var input,
      textarea,
      select,
      hasValue;
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
var groupHasPreviousValues = function(group) {
  var fields = group.querySelectorAll('.pp-field');
  for (var i = 0; i < fields.length; i++) {
    if (fieldHasValue(fields[i], true))
      return true;
  }
  return false;
};
var showGroup = function(group, index) {
  var fields = [];
  fields = group.querySelectorAll('.pp-field');
  for (var i = 0; i < fields.length; i++) {
    showField(fields[i], index + '-' + i);
  }
};
if (config.mode === 'list') {
  var li,
      i,
      lookup = [];
  for (i = 0; i < config.numFields; i++) {
    lookup[i] = i;
  }
  if (config.randomize) {
    var x,
        t;
    for (i = 0; i < config.numFields; i++) {
      x = Math.floor(Math.random() * config.numFields);
      t = lookup[i];
      lookup[i] = lookup[x];
      lookup[x] = t;
    }
  }
  for (i = 0; i < config.numFields; i++) {
    li = lookup[i];
    if (revealed.length === config.numToReveal)
      break;
    if (revealed.indexOf(li + '') >= 0)
      continue;
    pField = document.querySelector('#form' + config.formId + ' #epp' + li);
    if (!fieldHasValue(pField))
      showField(pField, li);
  }
  if (revealed.length < config.numToReveal) {
    for (i = 0; i < config.numFields; i++) {
      li = lookup[i];
      if (revealed.length === config.numToReveal)
        break;
      if (revealed.indexOf(li + '') >= 0)
        continue;
      pField = document.querySelector('#form' + config.formId + ' #epp' + li);
      if (!fieldHasValue(pField))
        showField(pField, li);
    }
  }
  if (revealed.length < config.numToReveal) {
    for (i = 0; i < config.numFields; i++) {
      li = lookup[i];
      if (revealed.length === config.numToReveal)
        break;
      if (revealed.indexOf(li + '') >= 0)
        continue;
      pField = document.querySelector('#form' + config.formId + ' #epp' + li);
      if (!config.onlyIncomplete)
        showField(pField, li);
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
var dom4 = document.querySelector('#form2930 #fe40639');
var fe40639 = new LiveValidation(dom4, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300
});

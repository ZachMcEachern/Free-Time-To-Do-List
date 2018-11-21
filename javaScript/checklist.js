(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector){
    if(!selector){
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0){
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addClickHandler = function (fn){
    this.$element.on('click', 'input', function (event){
      var email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  CheckList.prototype.addRow = function (coffeeOrder) {
    this.removeRow(coffeeOrder.emailAddress); //remove any existing rows that match the email address
    var rowElement = new Row(coffeeOrder); //create new instance of a row using the coffee order info
    this.$element.append(rowElement.$element); //add the new row instance's $element property to the checklist
  }

  CheckList.prototype.removeRow = function (email) {
    this.$element.find('[value = "' + email + '"]').closest('[data-coffee-order = "checkbox"]').remove();
  };

  function Row(coffeeOrder) {
    var $div = $('<div></div>', {'data-coffee-order': 'checkbox', 'class': 'checkbox'});

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {type:'checkbox', value: coffeeOrder.emailAddress});

    var description = coffeeOrder.coffee + ' ';
    if(coffeeOrder.flavor) {
      description += coffeeOrder.flavor + ' ,';
    }
    description += coffeeOrder.size + ' ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    $label.append($checkbox); //append connects elements together
    $label.append(description);
    $div.append($label);

    this.$element = $div;  //make subtree available as property of instance
  }


  App.CheckList = CheckList;
  window.App = App;
})(window);

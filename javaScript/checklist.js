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

  // Removes the row from the checklist when clicked on and adds it to the completed list.
  CheckList.prototype.addClickHandler = function (fn){
    this.$element.on('click', 'input', function (event){
      var removeItem = event.target.value;
      this.removeRowAddCompleted(removeItem);
      fn(removeItem);
    }.bind(this));
  };

  // Adds the item to the checklist.
  CheckList.prototype.addRow = function (watched_item) {
    this.removeRow(watched_item.show_title); //remove any existing rows that match the removeItem address
    var rowElement = new Row(watched_item); //create new instance of a row using the coffee order info
    this.$element.append(rowElement.$element); //add the new row instance's $element property to the checklist
  }

  // Call when you are adding a row to the completed list and it will have no checkbox.
  CheckList.prototype.addRowCompleted = function (watched_item) {
    console.log(watched_item.getAll());
    this.removeRow(watched_item.show_title); //remove any existing rows that match the removeItem address
    var rowElement = new RowWithNoCheckbox(watched_item); //create new instance of a row using the coffee order info
    this.$element.append(rowElement.$element); //add the new row instance's $element property to the checklist
  }

  // Removes the row from the checklist only.
  CheckList.prototype.removeRow = function (removeItem) {
    this.$element.find('[value = "' + removeItem + '"]').closest('[data-tv = "checkbox"]').remove();
  };

  // Removes the row from the checklist and moves it to the completed list.
  CheckList.prototype.removeRowAddCompleted = function (removeItem) {
    this.$element.find('[value = "' + removeItem + '"]').closest('[data-tv = "checkbox"]').remove();
  };

  // Creates a row with a checkbox.
  function Row(watched_item) {
    var $div = $('<div></div>', {'data-tv': 'checkbox', 'class': 'checkbox'});

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {type:'checkbox', value: watched_item.show_title});

    var description = watched_item.show_title + ' ';
    if(watched_item.genre) {
      description += watched_item.genre + ' ,';
    }
    description += watched_item.watch_watched + ' ';

    $label.append($checkbox); //append connects elements together
    $label.append(description);
    $div.append($label);

    this.$element = $div;  //make subtree available as property of instance
  }

  // Creates a row with no checkbox for the completed section.
  function RowWithNoCheckbox(watched_item) {
    var $div = $('<div></div>', {'data-tv': 'checkbox', 'class': 'checkbox'});

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {type:'checkbox', value: watched_item.show_title});

    var description = watched_item.show_title + ' ';
    if(watched_item.genre) {
      description += watched_item.genre + ' ,';
    }
    description += watched_item.watch_watched + ' ';

    $label.append($checkbox); //append connects elements together
    $label.append(description);
    $div.append($label);

    this.$element = $div;  //make subtree available as property of instance
  }

  if (window.App == undefined) {
    window.App = {};
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);

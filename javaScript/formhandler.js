(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery; //make explicit that the module is using code that is defined elsewhere

  function FormHandler(selector){
    if (!selector){
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);//prefixing a variable with $ means that the variable refers to elements using jQuery
    if(this.$formElement.length === 0) { //checks to see if selection was successful
      throw new Error ('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) { //gets passed the data object that contains user input
    console.log('Setting submit handler for form');
      this.$formElement.on('submit', function(event){ //accepts name of event and a callback to run when event is triggered
        event.preventDefault(); //prevents broswer from changing

        var data ={};
        $(this).serializeArray().forEach(function(item){
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
        });
        console.log(data);
        fn(data);

        this.reset(); //clears UI of the old data
        this.elements[0].focus(); //resets focus on the first field
    });
  };

  FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name = "emailAddress"]', function(event){
      var emailAddress = event.target.value;
      var message = '';
      if (fn(emailAddress)){
        event.tartget.setCustomValidity('');
      }else{
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;

})(window);

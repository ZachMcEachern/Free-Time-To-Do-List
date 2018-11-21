(function (window){
  'use strict'
  var FORM_SELECTOR = '[data-coffee-order = form]'; //data input area
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]'; //checklist area
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList; //import checklist module

  var myTruck = new Truck ('ncc-1701', new DataStore());
  window.myTruck = myTruck;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data){
    myTruck.createOrder.call(myTruck,data); //returns AND invokes new version of function
    checkList.addRow.call(checkList, data);
  });

  //formHandler.addInputHandler(Validation.isCompanyEmail); //calls email validation process


})(window);

(function (window){
  'use strict'
  /*
  var FORM_SELECTOR = '[data-coffee-order = form]'; //data input area
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]'; //checklist area
  */

  // TV show selector and checklist
  var TV_SHOW_FORM_SELECTOR = '[data-tv = tv-form]'; //data input area
  var TV_SHOW_CHECKLIST_SELECTOR = '[data-tv = "tv-checklist"]'; //checklist area

  // Movie selector and checklist
  var MOVIE_FORM_SELECTOR = '[data-movie = movie-form]'; //data input area
  var MOVIE_CHECKLIST_SELECTOR = '[data-movie = "movie-checklist"]'; //checklist area

  // Book selector and checklist
  var BOOK_FORM_SELECTOR = '[data-book = book-form]'; //data input area
  var BOOK_CHECKLIST_SELECTOR = '[data-book = "book-checklist"]'; //checklist area

  // Video Game selector and checklist
  var VIDEO_GAME_FORM_SELECTOR = '[data-video-game = video-game-form]'; //data input area
  var VIDEO_GAME_CHECKLIST_SELECTOR = '[data-video-game = "video-game-checklist"]'; //checklist area

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

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
  var CheckList = App.CheckList; //import checklist module

  //var checkList = new CheckList(CHECKLIST_SELECTOR);
  //checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  var formHandler_tv = new FormHandler(TV_SHOW_FORM_SELECTOR);
  var tv_db = new DataStore();
  window.tv_db = tv_db;

  var checkList = new CheckList(TV_SHOW_CHECKLIST_SELECTOR);

  formHandler_tv.addSubmitHandler(function(data){
    tv_db.add_todo.call(tv_db, data);
    checkList.addRow.call(checkList, data);
  });




/*
  formHandler.addSubmitHandler();
  console.log(formHandler);

  formHandler.addSubmitHandler(function (data){
    myTruck.createOrder.call(myTruck,data); //returns AND invokes new version of function
    checkList.addRow.call(checkList, data);
  });
*/
  //formHandler.addInputHandler(Validation.isCompanyEmail); //calls email validation process


})(window);

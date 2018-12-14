(function (window){
  'use strict'
  /*
  var FORM_SELECTOR = '[data-coffee-order = form]'; //data input area
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]'; //checklist area
  */

  // Book selector and checklist
  var BOOK_FORM_SELECTOR = '[data-book = book-form]'; //data input area
  var BOOK_CHECKLIST_SELECTOR = '[data-book = "book-checklist"]'; //checklist area
  var READ_BOOK_CHECKLIST_SELECTOR = '[data-book = book-read_checklist]';


  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList; //import checklist module


  //BOOK STUFF WILL GO HERE_______________________________________________________________________________________
  var formHandler_book = new FormHandler(BOOK_FORM_SELECTOR);
  var book_db = new DataStore();
  window.book_db = book_db;

  var book_checkList = new CheckList(BOOK_CHECKLIST_SELECTOR);
  var read_book_checkList = new CheckList(READ_BOOK_CHECKLIST_SELECTOR);

  // Will display the list of completed items.
    //Load this first because there might be items in the completed when they come back from another page?
  //watched_tv_checkList.addRowCompleted.call(watched_tv_checkList, tv_db);
  console.log(book_db.todo_list);
  if(book_db.todo_list != undefined){
    console.log("To do list is not empty.");
    checkList.addAllRow(book_db.todo_list);
  }

  console.log(book_db.done_list);
  if(book_db.done_list != undefined){
    console.log("Done list is not empty.");
    read_book_checkList.addAllRow(book_db.done_list);
  }

  // Make a listener for whenever a checkbox gets clicked.
  book_checkList.addClickHandler(book_db.remove_todo.bind(book_db), read_book_checkList, book_db.todo_list);

  formHandler_book.addSubmitHandler(function(data){
    console.log(data);

    if (data.watch_watched === "watch"){
      console.log("Statement was true");
      //must watch
      book_db.add_todo.call(book_db, data);
      book_checkList.addRow.call(book_checkList, data);
    }
    else{
      //Already watched
      book_db.add_to_done.call(book_db, data);
      read_book_checkList.addList(data.show_title);
    }
  });

  if (window.App == undefined) {
    window.App = {};
  }

})(window);

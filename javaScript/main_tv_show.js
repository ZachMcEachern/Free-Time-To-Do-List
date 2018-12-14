(function (window){
  'use strict'
  /*
  var FORM_SELECTOR = '[data-coffee-order = form]'; //data input area
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]'; //checklist area
  */

  // TV show selector and checklist
  var TV_SHOW_FORM_SELECTOR = '[data-tv = tv-form]'; //data input area
  var TV_SHOW_CHECKLIST_SELECTOR = '[data-tv = "tv-checklist"]'; //checklist area
  var WATCHED_TV_SHOW_CHECKLIST_SELECTOR = '[data-tv="tv-watched_checklist"]'; //watched checklist area


  var App = window.App;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList; //import checklist module


  //TV CHECKLIST STUFF______________________________________________________________________________________________
  var formHandler_tv = new FormHandler(TV_SHOW_FORM_SELECTOR);
  var tv_db = new DataStore();
  window.tv_db = tv_db;

  var checkList = new CheckList(TV_SHOW_CHECKLIST_SELECTOR);
  var watched_tv_checkList = new CheckList(WATCHED_TV_SHOW_CHECKLIST_SELECTOR);

  // Will display the list of completed items.
    //Load this first because there might be items in the completed when they come back from another page?
  //watched_tv_checkList.addRowCompleted.call(watched_tv_checkList, tv_db);
  console.log(tv_db.todo_list);
  if(tv_db.todo_list != undefined){
    console.log("To do list is not empty.");
    checkList.addAllRow(tv_db.todo_list);
  }

  console.log(tv_db.done_list);
  if(tv_db.done_list != undefined){
    console.log("Done list is not empty.");
    watched_tv_checkList.addAllRow(tv_db.done_list);
  }

  // Make a listener for whenever a checkbox gets clicked.
  checkList.addClickHandler(tv_db.remove_todo.bind(tv_db), watched_tv_checkList, tv_db.todo_list);

  formHandler_tv.addSubmitHandler(function(data){
    console.log(data);

    if (data.watch_watched === "watch"){
      console.log("Statement was true");
      //must watch
      tv_db.add_todo.call(tv_db, data);
      checkList.addRow.call(checkList, data);
    }
    else{
      //Already watched
      tv_db.add_to_done.call(tv_db, data);
      watched_tv_checkList.addList(data.show_title);
    }
  });










  //MOVIE STUFF WILL GO HERE_____________________________(CHANGE TO MOVIE VARIABLES)__________________________________________________________











  //BOOK STUFF WILL GO HERE_______________________________________________________________________________________



  //VIDEO GAME STUFF WILL GO HERE_______________________________________________________________________________________



  if (window.App == undefined) {
    window.App = {};
  }

})(window);

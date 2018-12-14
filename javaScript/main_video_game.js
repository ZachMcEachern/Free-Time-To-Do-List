(function (window){
  'use strict'
  /*
  var FORM_SELECTOR = '[data-coffee-order = form]'; //data input area
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]'; //checklist area
  */

  // Movie selector and checklist
  var GAME_FORM_SELECTOR = '[data-game = game-form]'; //data input area
  var GAME_CHECKLIST_SELECTOR = '[data-game = "game-checklist"]'; //checklist area
  var PLAYED_GAME_CHECKLIST_SELECTOR = '[data-game = game-played_checklist]';


  var App = window.App;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList; //import checklist module


  //TV CHECKLIST STUFF______________________________________________________________________________________________











  //MOVIE STUFF WILL GO HERE_____________________________(CHANGE TO MOVIE VARIABLES)__________________________________________________________
  var formHandler_game = new FormHandler(GAME_FORM_SELECTOR);
  var game_db = new DataStore();
  window.game_db = game_db;

  var game_checkList = new CheckList(GAME_CHECKLIST_SELECTOR);
  var played_game_checkList = new CheckList(PLAYED_GAME_CHECKLIST_SELECTOR);

  // Will display the list of completed items.
    //Load this first because there might be items in the completed when they come back from another page?
  //watched_tv_checkList.addRowCompleted.call(watched_tv_checkList, tv_db);
  console.log(game_db.todo_list);
  if(game_db.todo_list != undefined){
    console.log("To do list is not empty.");
    checkList.addAllRow(game_db.todo_list);
  }

  console.log(game_db.done_list);
  if(game_db.done_list != undefined){
    console.log("Done list is not empty.");
    watched_game_checkList.addAllRow(game_db.done_list);
  }

  // Make a listener for whenever a checkbox gets clicked.
  game_checkList.addClickHandler(game_db.remove_todo.bind(game_db), played_game_checkList, game_db.todo_list);

  formHandler_game.addSubmitHandler(function(data){
    console.log(data);

    if (data.watch_watched === "watch"){
      console.log("Statement was true");
      //must watch
      game_db.add_todo.call(game_db, data);
      game_checkList.addRow.call(game_checkList, data);
    }
    else{
      //Already watched
      game_db.add_to_done.call(game_db, data);
      watched_game_checkList.addList(data.show_title);
    }
  });










  //BOOK STUFF WILL GO HERE_______________________________________________________________________________________



  //VIDEO GAME STUFF WILL GO HERE_______________________________________________________________________________________



  if (window.App == undefined) {
    window.App = {};
  }

})(window);

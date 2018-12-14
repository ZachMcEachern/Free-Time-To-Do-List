(function (window){
  'use strict'
  /*
  var FORM_SELECTOR = '[data-coffee-order = form]'; //data input area
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]'; //checklist area
  */

  // Movie selector and checklist
  var MOVIE_FORM_SELECTOR = '[data-movie = movie-form]'; //data input area
  var MOVIE_CHECKLIST_SELECTOR = '[data-movie = "movie-checklist"]'; //checklist area
  var WATCHED_MOVIE_CHECKLIST_SELECTOR = '[data-movie = movie-watched_checklist]';


  var App = window.App;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList; //import checklist module


  //TV CHECKLIST STUFF______________________________________________________________________________________________











  //MOVIE STUFF WILL GO HERE_____________________________(CHANGE TO MOVIE VARIABLES)__________________________________________________________
  var formHandler_movie = new FormHandler(MOVIE_FORM_SELECTOR);
  var movie_db = new DataStore();
  window.movie_db = movie_db;

  var movie_checkList = new CheckList(MOVIE_CHECKLIST_SELECTOR);
  var watched_movie_checkList = new CheckList(WATCHED_MOVIE_CHECKLIST_SELECTOR);

  // Will display the list of completed items.
    //Load this first because there might be items in the completed when they come back from another page?
  //watched_tv_checkList.addRowCompleted.call(watched_tv_checkList, tv_db);
  console.log(movie_db.todo_list);
  if(movie_db.todo_list != undefined){
    console.log("To do list is not empty.");
    checkList.addAllRow(movie_db.todo_list);
  }

  console.log(movie_db.done_list);
  if(movie_db.done_list != undefined){
    console.log("Done list is not empty.");
    watched_movie_checkList.addAllRow(movie_db.done_list);
  }

  // Make a listener for whenever a checkbox gets clicked.
  movie_checkList.addClickHandler(movie_db.remove_todo.bind(movie_db), watched_movie_checkList, movie_db.todo_list);

  formHandler_movie.addSubmitHandler(function(data){
    console.log(data);

    if (data.watch_watched === "watch"){
      console.log("Statement was true");
      //must watch
      movie_db.add_todo.call(movie_db, data);
      movie_checkList.addRow.call(movie_checkList, data);
    }
    else{
      //Already watched
      movie_db.add_to_done.call(movie_db, data);
      watched_movie_checkList.addList(data.show_title);
    }
  });










  //BOOK STUFF WILL GO HERE_______________________________________________________________________________________



  //VIDEO GAME STUFF WILL GO HERE_______________________________________________________________________________________



  if (window.App == undefined) {
    window.App = {};
  }

})(window);

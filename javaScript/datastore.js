(function () {
  var App = window.App || {};
  //var CheckList = App.CheckList; //import checklist module

  var todo_list = new Array();
  var done_list = new Array();

  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
  };

  DataStore.prototype.add_todo = function (val){
    todo_list.push(val);
    console.log(todo_list);
  };

  DataStore.prototype.add_to_done = function(val){
    done_list.push(val);
    console.log('From done list: ');
    console.log(done_list);
  };

  DataStore.prototype.get = function (key){ //looks up value for instance's data property
    return this.data[key];
  };

  DataStore.prototype.getAll = function (){ //returns all references to the data property
    return this.data;
  }

  DataStore.prototype.remove_todo = function (key){
    console.log("The key being passed to remove_todo is: " + key);

    for(let item of todo_list){
      if(item.show_title == key){
        console.log("Found matching item. ");
        console.log(item);
        done_list.push(item);
        console.log(item.genre);
      }
    }
    //done_list.push(key);
    console.log("Done list: ");
    console.log(done_list);
    delete this.data[key]
  };

  App.DataStore = DataStore; //Assign function to global App property
  window.App = App;
})(window);

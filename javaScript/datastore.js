(function () {
  var App = window.App || {};

  var todo_list = new Array();
  var done_list = new Array();

  function DataStore() {
    this.data = {};
  }

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
    delete this.data[key]
  };

  App.DataStore = DataStore; //Assign function to global App property
  window.App = App;
})(window);

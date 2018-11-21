(function () {
  var App = window.App || {};

  function DataStore() {
    //console.log('From DataStore Function');
    this.data = {};
  }

  DataStore.prototype.add = function (key,val){
    this.data[key] = val;
  };

  DataStore.prototype.get = function (key){ //looks up value for instance's data property
    return this.data[key];
  };

  DataStore.prototype.getAll = function (){ //returns all references to the data property
    return this.data;
  }

  DataStore.prototype.remove = function (key){
    delete this.data[key]
  };

  App.DataStore = DataStore; //Assign function to global App property
  window.App = App;
})(window);

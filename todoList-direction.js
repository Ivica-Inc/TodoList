movePosition: function (position, direction) {
  var store = JSON.parse(localStorage.getItem("todos-local"));
  var newTodos = store.map(function(item) {
      if (direction === "up") {
        if (item.position === 0) {
          item.position = store.length -1;
          return item;
        }else if (parseInt(position) === 0) {
          item.position -= 1;
          return item;
        }else if (item.position === (parseInt(position) -1)) {
          item.position += 1;
          return item;
        }else if (item.position === parseInt(position)) {
          item.position -= 1;
          return item;
        }else {
          return item;
        }
      }else if (direction === "down") {

      }
  });

  if (direction === "up" && parseInt(position) === 0) {
    var newTodos = store.map(function(item) {
      if (item.position === 0) {
        item.position = store.length -1;
        return item;
      }else {
        item.position -= 1;
        return item;
      }
    });
  }else if (direction === "up"){
    var newTodos = store.map(function(item) {
      if (item.position === (parseInt(position) -1)) {
        item.position += 1;
        return item;
        //item.position += 1;
      }else if (item.position === parseInt(position)) {
        item.position -= 1;
        return item;
      }else {
        return item;
      }
    });
  }else if (direction === "down" && parseInt(position) === store.length -1) {
    var newTodos = store.map(function(item) {
      if (item.position === store.length -1){
        item.position = 0;
        return item;
      }else {
        item.position += 1;
        return item;
      }
    });
  }else if (direction === "down") {
    var newTodos = store.map(function(item) {
      if (item.position === parseInt(position)) {
        item.position += 1;
        return item;
      }else if (item.position === parseInt(position) +1) {
        item.position -= 1;
        return item;
      }else {
        return item;
      }
    });
  }
  newTodos.sort(function (a, b) {
    return a.position - b.position;
  });
  this.todos = newTodos;
  view.displayTodos();



// #########################################

movePosition: function (position, direction) {
  var store = JSON.parse(localStorage.getItem("todos-local"));
  if (direction === "up" && parseInt(position) === 0) {
    var newTodos = store.map(function(item) {
      if (item.position === 0) {
        item.position = store.length -1;
        return item;
      }else {
        item.position -= 1;
        return item;
      }
    });
  }else if (direction === "up"){
    var newTodos = store.map(function(item) {
      if (item.position === (parseInt(position) -1)) {
        item.position += 1;
        return item;
        //item.position += 1;
      }else if (item.position === parseInt(position)) {
        item.position -= 1;
        return item;
      }else {
        return item;
      }
    });
  }else if (direction === "down" && parseInt(position) === store.length -1) {
    var newTodos = store.map(function(item) {
      if (item.position === store.length -1){
        item.position = 0;
        return item;
      }else {
        item.position += 1;
        return item;
      }
    });
  }else if (direction === "down") {
    var newTodos = store.map(function(item) {
      if (item.position === parseInt(position)) {
        item.position += 1;
        return item;
      }else if (item.position === parseInt(position) +1) {
        item.position -= 1;
        return item;
      }else {
        return item;
      }
    });
  }
  newTodos.sort(function (a, b) {
    return a.position - b.position;
  });
  this.todos = newTodos;
  view.displayTodos();

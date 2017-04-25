// singleton
var singleton = function (fn) {
  var result;
  return function () {
    return result || (result = fn .apply(this, arguments));
  }
}

// usage example
var createMask = singleton(function () {
  return document.body.appendChild( document.createElement('div') );
})
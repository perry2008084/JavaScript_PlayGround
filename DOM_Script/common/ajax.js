function getData(url, callback) {
  var request = new XMLHttpRequest();
  if (request) {
    request.open("GET", url, true);
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        callback(request.responseText);
      }
    };
    request.send(null);
  }else {
    console.error('browser doesn\'t support ajax.');
  }
}

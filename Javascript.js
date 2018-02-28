const fs = require('fs');
const url = require('url');

function renderHtml(path, response){
  fs.readFile(path, null, function(error, data){
    if(error){
      writeHead(404)
      response.write('File not found!')
    }
    else {
      response.write(data);
    }
    response.end();
  })
}

module.exports = {
  handleRequests: function (request, response) {
    response.writeHeader(200, {'Content-Type' : 'text/html'});
    
    var path = url.parse(request.url).pathname;

    switch (path) {
      case '':
        renderHtml(./Index.html, response);
      break;

      default:
        renderHtml(./Index.html, response);

    }
  }
}

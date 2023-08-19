let http = require('http');
let server = http.createServer(
  function(req, res){
    let text;
    
    if(req.url == "/cats"){
      text = "Here are all the cats...";
    }
    else if (req.url == "/dogs"){
      text = "There are some dogs as well...";
    }
    else {
      text = "Not sure what to show you...";
    }

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end(text);
  }
)

server.listen(8080, "0.0.0.0");
const express = require('express'),
           bp = require("body-parser"),
          app = express(),
      DB_NAME = "tasks",
         port = 8080;

app.use(express.json());

require('./server/utils/mongoose')(DB_NAME);
require("./server/utils/routes")(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
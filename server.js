const express = require ("express")

const app = express();

// next step is to define port 
// heroku will create process.env.port while deployment
const port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes goes here 

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(port,function(){
    console.log("App is listening at port: ",port);
})
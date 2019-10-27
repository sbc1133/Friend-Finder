
// since we have two html pages in public folder hence two html routes in this file
var path = require("path");

module.exports = function(app){

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

};

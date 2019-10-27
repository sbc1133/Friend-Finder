
// api routes are mainly for database , since we have friends,js json file as data 
const friends = require("../data/friends");

module.exports = function(app){


    app.get("/api/friends",function(req,res){
        res.json(friends);
    })

    app.post("/api/friends",function(req,res){
        
        console.log(req.body);
        
        var bestMatch ={
            name: "",
            photo: "",
            difference:Infinity
        }
        var newUser = req.body;
        var newUserScore = newUser.scores;
        var scoreDifference = 0 ;

        for ( let i = 0 ; i<friends.length;i++){
            var currentUser = friends[i]
            scoreDifference = 0;
            for(let j =0 ; j<currentUser.scores.length;j++){
                scoreDifference += Math.abs(parseInt(currentUser.scores[j])-parseInt(newUserScore[j]))
            }
            if(scoreDifference<bestMatch.difference){
                bestMatch.difference = scoreDifference
                bestMatch.name = currentUser.name;
                bestMatch.photo =currentUser.photo;
            }
        }

        friends.push(newUser);
        res.json(bestMatch);
    })
}
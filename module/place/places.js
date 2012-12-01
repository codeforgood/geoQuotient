var mongo = require('mongodb');

var server = mongo.Server,
    db = mongo.Db,
    BSON = mongo.BSONPure;

/*var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://ds043917.mongolab.com:43917/geoquotient';*/

var mongoUri = process.env.MONGOLAB_URI ||
  'mongodb://heroku_app9665789:6f3tmtg733hdtmuh4dehjott9@ds043917.mongolab.com:43917/heroku_app9665789'; 

console.log("mongoURI: " + mongoUri);

db.connect(mongoUri, function (err, db) {
    if(!err) {
        console.log("Connected to 'heroku_app9665789' database");

        db.collection('places', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'places' collection doesn't exist.");
            }else{
                console.log("The 'places' collection exist.");
            }
            
        });
    }else{
        console.log("Failed to Connect to 'heroku_app9665789' database");
    }
});


exports.findAll = function(req, res) {
    
    db.connect(mongoUri, function (err, db) {
        if(!err) {
            console.log("Connected to 'heroku_app9665789' database");

            db.collection('places', function(err, collection) {
                if (err) {
                    console.log("The 'places' collection doesn't exist.");
                }else{
                    console.log("The 'places' collection exist.");
                }

                collection.find().toArray(function(err, items) {
                    res.send(items);
                });
                
            });
        }else{
            console.log("Failed to Connect to 'heroku_app9665789' database");
        }
    });
};
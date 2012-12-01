var mongo = require('mongodb');

var server = mongo.Server,
    db = mongo.Db,
    BSON = mongo.BSONPure;

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
                
                collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
                });
            }
            
        });
    }else{
        console.log("Failed to Connect to 'heroku_app9665789' database");
    }
});
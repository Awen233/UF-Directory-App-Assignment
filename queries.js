/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

    mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  Listing.find({name: "Library West"}).then(function(result){
    console.log(result);
  });
};


var removeCable = function() {
  Listing.findOneAndRemove({ code: 'CABL'}, function (err, data) {
     if (err) {
       throw err;
     };
     console.log(data);
  });
};

var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "new address"}).then(function(){
    Listing.findOne({name:"Phelps Laboratory"}).then(function(result){
      console.log(result);
    });
  });
};

var retrieveAllListings = function() {
  Listing.find({}, function(err, data){
    console.log(data);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

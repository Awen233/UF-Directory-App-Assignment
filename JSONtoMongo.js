'use strict';
// this is the uri:
// mongodb://<dbuser>:<dbpassword>@ds117539.mlab.com:17539/uf_web
// I create the user CEN3031 with the dbpassword CEN3031TA
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
 fs.readFile('listings.json', function(err,data){
   var listings = JSON.parse(data).entries;
   //Add the all the listings from the JSON file
   for(var i = 0; i < listings.length; i++){
     new Listing(listings[i]).save((err,listing)=>{
       if(err) {
          throw err;
        }
     });
   }
 });

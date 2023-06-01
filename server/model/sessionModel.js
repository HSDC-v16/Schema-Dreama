//require mongoose
const mongoose = require('mongoose');


//declare Schema
const Schema = mongoose.Schema;



const sessionModel = new Schema ({ 
    cookieId: { type: String, require: false },
  });
  
  
module.exports = mongoose.model('sessionModel', sessionModel)

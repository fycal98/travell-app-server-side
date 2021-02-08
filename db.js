const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/topdeck', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).catch((e)=>{throw('DBERROR : ' + e)});
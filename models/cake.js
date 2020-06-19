const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: { type: String },
  flavor: { type: String },
  varient: [{
    price: {type: String},
    unitValue: {type: String},
  }],
  cakeDesc: {type: String},
  isEggless: {type: Boolean},
  availableAt: [{type: String}],
  chefsWord: {type: String},
  cakeImgs: [{type: String}]
})

const Cake = mongoose.model('cake', cakeSchema);

module.exports = Cake;

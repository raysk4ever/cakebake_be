const mongoose = require('mongoose');

module.exports = () => {
  const url = 'mongodb+srv://ravi:ravi@cluster0-uyvwz.mongodb.net/<dbname>?retryWrites=true&w=majority';
  const options = {useNewUrlParser: true, useUnifiedTopology: true};
  mongoose.connect(url, options)
  .then(()=>console.log(`Connected To MongoDB`))
  .catch(err=>console.log(`Mongo Error: ${err.message}`))
}

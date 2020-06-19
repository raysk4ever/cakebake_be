const express = require('express');
const app = express();

//db
// require('./startup/db')();

//routes
require('./startup/routes')(app);

app.get('/', (req, res)=>{
  res.send({
    status: true,
    message: 'Welcome to CakeBake Backend Api'
  })
})

const PORT = 5000;
app.listen(PORT, console.log(`running at port ${PORT}`))

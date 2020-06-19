const Cake = require('../routes/cake');

module.exports = app => {
  app.use('/cake', Cake);
}

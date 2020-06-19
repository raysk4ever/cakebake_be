const Cake = require('../models/cake');
const fakeCakeData = require('../mockData/cakes.json');

module.exports = {
  async getAllCakes(req, res){
    try{
      let findOptions = {};
      // const cakes = await Cake.find(findOptions);
      let responseObj = {
        totalCakeCounts: fakeCakeData.length,
        cakes: fakeCakeData,
      }
      res.send({status: true, message: 'Cakes Found Successfully', data: responseObj});
    }catch(err){
      console.log('inside getAllCakes', err.message);
      res.send({status: false, message: 'Something Went Wrong', data: null,});
    }
  }
}

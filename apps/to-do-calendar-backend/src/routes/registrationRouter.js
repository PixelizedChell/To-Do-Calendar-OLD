const registrationRouter = require('express').Router();

registrationRouter.route('/').get((req, res) => {
  console.log('get signup route');
  res.send('Signup List Router GET');
});



registrationRouter.route('/').post((req, res) => {
  console.log('post signup route');
  console.log(req.data);
  res.send('Signup List Router GET');
});
module.exports = registrationRouter;
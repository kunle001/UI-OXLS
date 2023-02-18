const User= require('../Models/userModel')
const AppError = require('../utils/appError')
const catchAsync= require('../utils/catchAsync')
const Tutor = require('../Models/tutorModel');


exports.updateProfile= catchAsync(async(req, res, next)=>{
    if(req.body.password|| req.body.confirmPassword){
        return next(new AppError('you cannot update password here', 400))
    };

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  if (req.file) {req.body.photo = req.file.filename};

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });

});


exports.getAllUsers= catchAsync(async(req, res, next)=>{
  const users= await User.find()

  res.status(200).json({
    status: 'success',
    data: users
  })
});

exports.profile= catchAsync(async(req, res, next)=>{
  const user= await User.findById(req.user.id);
  const tutor= await Tutor.findById(req.user.id)

  res.status(200).json({
    status: 'success',
    data: user ||tutor
  })
});

const wayforpay= require('wayforpay')

exports.buyCredit= catchAsync(async(req,res,next)=>{
  const clientDetails= req.user.name.split(' ')

  const client= await new wayforpay({
    // merchantAccount: '',
    merchantDomainName: 'http://seunoxford.com',
    merchantSecretKey: '8d7f980347bb25365e8c7f5b9f4b78c61eeb013c'
  });

  const paymentButton= await client.createPaymentButton({
    orderReference: '',
    orderDate: new Date().toISOString(),
    amount: req.params.price,
    currency: 'USD',
    productName: 'Course Credits',
    productPrice: req.params.price,
    productCount: '1',
    clientFirstName: clientDetails[0],
    clientLastName: clientDetails[1],
    clientPhone: req.user.phone,
    returnUrl: `${req.protocol}://${req.get('host')}/`,
    serviceUrl: ''
  });

  res.status(200).json({
    status: 'success',
    data: paymentButton
  })

})



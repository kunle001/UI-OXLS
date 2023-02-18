const multer = require('multer');
const sharp = require('sharp');
const AppError = require('./appError');
const catchAsync= require('../utils/catchAsync')

const imageStorage= multer.memoryStorage();

const imageFilter= (req, file, next, cb)=>{
    if (file.mimetype.startsWith('image')){
        cb(null, true)
    }else{
        cb(new AppError('Not an Image! Please upload only images', 400))
    }
}
// const videoStorage
// const multipleIMageStorage
// const multipleVideStorage

const upload= multer({
    storage:imageStorage,
    filter:imageFilter
});


exports.uploadSingleImage= upload.single('photo');

exports.resizeImage = (fileLocation, size,name)=>{
    if(!fileLocation){
      const fileLocation= 'public/img/users'
    }
    return (req, res, next) => {
        // Check if req.file exists
        if (!req.file) {
          return next();
        }
        // Determine resolution based on size argument
        let resolution;
        switch (size) {
          case "small":
            resolution = [250, 250];
            break;
          case "medium":
            resolution = [500, 500];
            break;
          default:
            resolution = [1500, 1500];
            break;
        };
        // Determine filename based on req.params.id or req.user
        let filename;
        if (req.params.id) {
          filename=req.file.filename = `${name}-${req.params.id}-${Date.now()}.jpeg`;
        } else if (req.user) {
          filename=req.file.filename = `${req.user.role}-${req.user.id}-${Date.now()}.jpeg`;
        }
        // Resize image and save to file
        sharp(req.file.buffer)
          .resize(resolution)
          .toFormat("jpeg")
          .toFile(`${fileLocation}/${filename}`, (err) => {
            if (err) {
              return next(new AppError(" not saved", 400));
            }
            return next();
          });
      };
};

const storage= multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'public/img/users')
  },
  filename: function(req,file,cb){
    cb(null,`${file.fieldname}-${Date.now()}`)
  }
});

const vUpload= multer(storage);

exports.videoUpload= vUpload.single('video')

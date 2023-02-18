const express= require('express')
const authController= require('../Controllers/authController')
const tutorController= require('../Controllers/tutorController') 
const reviewRouter= require('../Routes/reviewRoute')
const userController= require('../Controllers/userController');
const fileUpload= require('../utils/fileUpload')

const fileLocation= 'public/img/users';
const name= 'images';
const multipleField= 'images'

const router= express.Router();

router.use('/:tutorId/reviews', reviewRouter)
router.route('/apply').post(authController.protect,
    tutorController.uploadCV,
    tutorController.resizeCV,
    tutorController.applyTutor)



router.route('/signup/:approvalToken').post(tutorController.checkValidToken,
                                                fileUpload.uploadSingleImage,
                                                fileUpload.resizeImage(fileLocation),
                                                authController.signUpTutor);
router.route('/:tutorId').get(tutorController.findOneTutor)


router.route('/update-me').patch(
    authController.protect,
    authController.RestrictTo("tutor"),
    fileUpload.uploadSingleImage,
    fileUpload.resizeImage(fileLocation),  
    fileUpload.videoUpload,
    tutorController.updateProfile
    )

router.use( authController.protect,authController.RestrictTo('admin'))

router.route('/applications').get(tutorController.getApplications)
router.route('/applications/approve/:applicationId').get(tutorController.approveApplication)
router.route('/applications/disapprove/:applicationId').get(tutorController.disapproveApplication)

module.exports= router; 
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg:"User Added Successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const Response = await Course.find({});
    res.json({
        Courses:Response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const CourseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:CourseId
        }
    })

    res.json({
        msg:"Purchased course successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    // console.log("hi there")

    const user = await User.findOne({
        username:username
    })

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses}
        });

    res.json({
        Courses:courses
    });

});

module.exports = router
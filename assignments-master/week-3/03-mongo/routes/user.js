const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Courses, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
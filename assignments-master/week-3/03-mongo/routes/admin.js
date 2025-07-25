const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Course, Admin } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    await Admin.create({
        username,
        password
    })

    res.json({
        msg:"Admin Added Successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg:"Course added successfully"
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const Response = await Course.find({});
    res.json({
        Courses:Response
    })
});

module.exports = router;
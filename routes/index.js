const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

//render homepage
router.get("/", homeController.homePage);

//upload CSV
router.use("/file/uploads", homeController.uploadFile);

//view CSV File in Table format
router.use("/view/:id", homeController.displayCSV);

//delete CSV file
router.use("/delete/:id", homeController.deleteCSV);

module.exports = router;

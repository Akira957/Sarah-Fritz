const router = require("express").Router();
const artRoutes = require("./art");

// Plant routes
router.use("/art", artRoutes);

module.exports = router;
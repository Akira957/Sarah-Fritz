const router = require("express").Router();
const artRoutes = require("./art");

// Art routes
router.use("/art", artRoutes);

module.exports = router;
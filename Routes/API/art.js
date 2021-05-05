const router = require("express").Router();
const artController = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artController.findAll)
  .post(artController.create);

module.exports = router;
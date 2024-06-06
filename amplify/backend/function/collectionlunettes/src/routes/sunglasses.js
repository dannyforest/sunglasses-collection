const express = require("express");
const router = express.Router();

const sunglasses_controller = require("../controllers/sunglassesController");

// POST request for creating Sunglasses.
router.post("/", sunglasses_controller.sunglasses_create);

// DELETE request to delete Sunglasses.
router.delete("/:id", sunglasses_controller.sunglasses_delete);

// PUT request to update Sunglasses.
router.put("/:id", sunglasses_controller.sunglasses_update);

// GET request for one Sunglasses.
router.get("/:id", sunglasses_controller.sunglasses_detail);

// GET request for list of all Sunglasses items.
router.get("/", sunglasses_controller.sunglasses_list);

module.exports = router;
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route('/').get(protect, fetchChats);
// router.route('/group').get(protect, createGroupChat);
// router.route('/rename').get(protect, renameGroup);
// router.route('/groupRemove').get(protect, removeFromGroup);
// router.route('/groupAdd').get(protect, addToGroup);

module.exports = router;

const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const leaderController = require("../../controllers/stackholders/leader");

const router = express.Router();

router.get("/", passportJWT, leaderController.getAll);

router.get("/:leaderId", passportJWT, leaderController.getOne);

router.post("/addLeader/:userId", passportJWT, leaderController.addLeader);

router.post(
  "/addLeaderToGroup/:userId/:groupId",
  passportJWT,
  leaderController.addLeaderToGroup
);

router.post("/lockLeader/:leaderId", passportJWT, leaderController.lockLeader);

router.post(
  "/unlockLeader/:leaderId",
  passportJWT,
  leaderController.unlockLeader
);

router.delete(
  "/deleteLeader/:userId",
  passportJWT,
  leaderController.deleteLeader
);

module.exports = router;

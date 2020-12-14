const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const groupController = require("../controllers/group");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, groupController.getAll);

router.post(
    "/",
    passportJWT,
    awsUpload.single("image"),
    groupController.addOne
);


router.post(
    "/app",
    passportJWT,
    awsUpload.single("image"),
    groupController.appAddOne
);

router.get("/:groupId", passportJWT, groupController.getOne);

router.put(
    "/:groupId",
    passportJWT,
    awsUpload.single("image"),
    groupController.updateOne
);

router.delete("/:groupId", passportJWT, groupController.deleteOne);

router.get("/lock/:groupId", passportJWT, groupController.lockOne);

router.get("/unlock/:groupId", passportJWT, groupController.unlockOne);

router.get(
    "/requestToJoin/:groupId",
    passportJWT,
    groupController.requestToJoin
);

router.get(
    "/acceptRequestToJoin/:userId/:groupId",
    passportJWT,
    groupController.acceptRequestToJoin
);

router.get(
    "/deleteRequestToJoin/:userId/:groupId",
    passportJWT,
    groupController.deleteRequestToJoin
);

router.get("/request/cancel", passportJWT, groupController.cancelRequestToJoin);

router.get("/requests/:groupId", passportJWT, groupController.groupRequests);

module.exports = router;
const sinon = require("sinon");
const expect = require("chai").expect;

const mongoose = require("mongoose");

const User = require("../models/stackholders/user");
const AuthController = require("../controllers/auth");

describe("Auth Controller - Login", function() {
  it("should throw an error with code 500 if accessing database fails", function(done) {
    sinon.stub(User, "findOne");
    // force findOne to throw error as it couldn't connect to db
    User.findOne.throws();

    const req = {
      body: {
        phone: 123
      }
    };

    AuthController.login(req, {}, () => {}).then(result => {
      expect(result).to.be.an("error");
      expect(result).to.have.property("statusCode", 500);
      done();
    });
    User.findOne.restore();
  });

//   it("should send response with user", function(done) {
//     const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@startup-project-1cb2e.mongodb.net/test`;
//     mongoose
//       .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//       .then(result => {
//         console.log("Connected to database");
//         app.listen(process.env.PORT || 3000);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
});

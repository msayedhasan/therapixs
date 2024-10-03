const sinon = require("sinon");
const expect = require("chai").expect;
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/is-auth");

describe("Auth Middleware", function() {
  it("should throw an error if no authorization header is present", function() {
    const req = {
      get: function(header) {
        return null;
      }
    };

    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      "Not Authenticated."
    );
  });

  it("should throw an error if the authorization error is only one string", function() {
    const req = {
      get: function(header) {
        return "xyz";
      }
    };
    // must pass as it expects to throw an error
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it("should throw an error if the token cannot be verified", function() {
    req = {
      get: function(header) {
        return "Bearer xyz";
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw;
  });

  it("should yield a userId after decoding the token", function() {
    req = {
      get: function(header) {
        return "Bearer asfjndkgfnewklqg";
      }
    };
    sinon.stub(jwt, "verify");
    jwt.verify.returns({ userId: "abc" });
    authMiddleware(req, {}, () => {});
    expect(req).to.have.property("userId", "abc");
    expect(jwt.verify.called).to.be.true;
    jwt.verify.reclinic();
  });
});

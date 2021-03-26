const config = require("./config/index");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const FacebookTokenStrategy = require("passport-facebook-token");
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const User = require("./models/stackholders/user");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_SECRET,
    },
    async (payload, done) => {
      try {
        // find user from token
        const user = await User.findById(payload.userId);
        // if user doesn't exist
        if (!user) {
          return done(null, false);
        }
        // return user
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// Facebook oauth
passport.use(
  "facebookToken",
  new FacebookTokenStrategy(
    {
      clientID: config.oauth.facebook.clientID,
      clientSecret: config.oauth.facebook.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingFacebookUser = await User.findOne({
          "facebook.id": profile.id,
        });
        if (existingFacebookUser) {
          if (existingFacebookUser.name == "") {
            existingFacebookUser.name = profile.displayName;
          }
          if (existingFacebookUser.image == "") {
            existingFacebookUser.image = profile.photos[0].value;
          }
          await existingFacebookUser.save();
          return done(null, existingFacebookUser);
        }

        if (profile.emails[0].value != "") {
          // const existingUser = await User.findOne({
          //   "google.email": profile.emails[0].value,
          // });
          const existingUser = await User.findOne({
            $or: [
              { "apple.email": profile.emails[0].value },
              { "google.email": profile.emails[0].value },
            ],
          });
          if (existingUser) {
            existingUser.methods.push("facebook");
            if (existingUser.name == "") {
              existingUser.name = profile._json.name;
            }
            if (existingUser.image == "") {
              existingUser.image = profile.photos[0].value;
            }
            existingUser.facebook = {
              id: req.user.id,
              email: req.user.email,
            };
            existingUser.save();
            return done(null, existingUser);
          }
        }

        const newUser = new User({
          name: profile.displayName,
          image: profile.photos[0].value,
          methods: ["facebook"],
          facebook: {
            id: profile.id,
            email: profile.emails[0].value,
          },
        });

        newUser.otpVerified = false;

        await newUser.save();
        return done(null, newUser);
      } catch (err) {
        console.log(err);
        return done(err, false, err.message);
      }
    }
  )
);

// Google oauth
// passport.use(
//   "googleToken",
//   new GooglePlusTokenStrategy(
//     {
//       clientID: config.oauth.google.clientID,
//       clientSecret: config.oauth.google.clientSecret,
//       passReqToCallback: true,
//     },
//     async (req, accessToken, refreshToken, profile, done) => {
//       console.log("google passport");
//       try {
//         console.log("profile", profile);
//         let existingGoogleUser = await User.findOne({
//           "google.id": profile.id,
//         });
//         if (existingGoogleUser) {
//           return done(null, existingGoogleUser);
//         }

//         // Check if we have someone with the same email
//         existingUser = await User.findOne({
//           $or: [
//             { "local.email": profile.emails[0].value },
//             { "facebook.email": profile.emails[0].value },
//           ],
//         });
//         if (existingUser) {
//           // We want to merge google's data with local auth
//           existingUser.methods.push("google");
//           existingUser.google = {
//             id: profile.id,
//             email: profile.emails[0].value,
//           };
//           await existingUser.save();
//           return done(null, existingUser);
//         }

//         const newUser = new User({
//           methods: ["google"],
//           google: {
//             id: profile.id,
//             email: profile.emails[0].value,
//           },
//         });

//         await newUser.save();
//         return done(null, newUser);
//       } catch (error) {
//         done(error, false, error.message);
//       }
//     }
//   )
// );

passport.use(
  "googleToken",
  new GoogleStrategy(
    {
      clientID: config.oauth.google.clientID,
      clientSecret: config.oauth.google.clientSecret,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        console.log("profile", profile);
        let existingGoogleUser = await User.findOne({
          "google.id": profile.id,
        });
        if (existingGoogleUser) {
          return done(null, existingGoogleUser);
        }

        // Check if we have someone with the same email
        existingUser = await User.findOne({
          $or: [
            { "local.email": profile.emails[0].value },
            { "facebook.email": profile.emails[0].value },
          ],
        });
        if (existingUser) {
          // We want to merge google's data with local auth
          existingUser.methods.push("google");
          existingUser.google = {
            id: profile.id,
            email: profile.emails[0].value,
          };
          await existingUser.save();
          return done(null, existingUser);
        }

        const newUser = new User({
          methods: ["google"],
          google: {
            id: profile.id,
            email: profile.emails[0].value,
          },
        });

        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        console.log("aaaaa");
        done(error, false, error.message);
      }
    }
  )
);

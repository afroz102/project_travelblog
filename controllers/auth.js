// const AuthController = {};
// const AuthModel = require('./../models/Auth.js');

// AuthController

// /* When login.hbs and home.hbs is ready uncomment this code and comment res.status block
//  if (!req.session.loggedIn) {
//      res.render('login.hbs', { alert: "Invalid Credentials"});
//  } else {
//      res.redirect('/home');
//  } */


// // AuthController.logout = function(req, res) {
// //     var session = req.session;
// //     session.destroy();
// //     res.clearCookie('somename');
// //     return res.redirect('/landing');
// // };

// // AuthController.checkIfLoggedIn = function(req, res, next) {
// //     var url = req.originalUrl;
// //     var userSession = req.session.user;

// //     Model.checkIfLoggedIn(url, userSession, function(error, data) {
// //         if(error) {
// //             return res.redirect('/landing')
// //         }
// //         return next();
// //     });
// // }; 

// module.exports = AuthController;
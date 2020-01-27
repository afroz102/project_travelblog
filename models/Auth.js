// const Auth = {};
// // const User = require('./Users.js');
// Auth.login = function(plain_password, cb) {
//     //console.log(email, password);
//     User.findOne({"email": email}, function(error, data){
//         if(error){
//             return cb(error);
//         }
//         if(!data){
//             return cb("No Such User ... Please Signup");
//         }
//         console.log(data)
//         bcrypt.compare(plain_password, data.password, function(err, res){
//             console.log(res);
//             return cb(null, res);
//         });
//     });
// };
// module.exports = Auth;
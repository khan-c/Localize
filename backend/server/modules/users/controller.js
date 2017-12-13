import User from './model';

// export const createUser = ({ token, profile }) => {
//   const { id, displayName, emails } = profile;
//
//   const newUser = new User();
//
//   newUser.google.id = id;
//   newUser.google.token = token;
//   newUser.google.name = displayName;
//   newUser.google.email = emails[0].value;
//
//   newUser.save((err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//
//   return newUser;
// };
//
// export const getCurrentUser = async (req, res) => {
//
// }
//
// export const getUserById = (id) => {
//   const user = User.findById(id, (err, user) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   return user;
// }
//
// export const getUserByToken = (token) => {
//   const user = User.findOne({ token }, (err, user) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   return user;
// }

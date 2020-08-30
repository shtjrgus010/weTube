import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password != password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) => {
  res.render("Login", { pageTitle: "Log In" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("Users");
export const userDetail = (req, res) => res.render("User Detail");
export const editProfile = (req, res) => res.render("Edit Profile");
export const changePassword = (req, res) => res.render("Change Password");

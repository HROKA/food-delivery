const adminSignOut = (req, res, next) => {
  if (req.cookies.admin) {
    res
      .clearCookie('admin')
      .status(200)
      .json({ message: 'Logout Successfully' });
  } else next('You are not sign-in');
};

module.exports = adminSignOut;

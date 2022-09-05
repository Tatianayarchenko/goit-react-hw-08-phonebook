const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
// const getUser = state => state.auth.user;

// const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  //   getUser,
  //   getIsRefreshingUser,
};

export default authSelectors;

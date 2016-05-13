const defaultUserState = {
  isLoggedIn: false,
};

export default function user(state = defaultUserState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

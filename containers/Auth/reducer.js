const initialState = {
  isLoggingIn: false,
  token: 0,
}

export default authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggingIn: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        token: 1,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoggingIn: false,
        token: 0,
      }
    default:
      return state;
  }
}
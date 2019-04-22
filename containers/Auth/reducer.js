const initialState = {
  isLoggingIn: false,
  token: 0,
  signUpToken: 0,
  isSigningUp: false,
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
      case 'SIGNUP':
      return {
        ...state,
        isSigningUp: true,
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isSigningUp: false,
        signUpToken: 1,
      }
    case 'SIGNUP_FAIL':
      return {
        ...state,
        isSigningUp: false,
        signUpToken: 0,
      }
    default:
      return state;
  }
}
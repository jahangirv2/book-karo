const initialState = {
  isLoggingIn: false,
  token: '',
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
        token: action.data.token,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoggingIn: false,
        token: '',
      }
    default:
      return state;
  }
}
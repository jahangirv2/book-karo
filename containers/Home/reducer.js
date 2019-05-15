const initialState = {
    isFetching: false,
    data:[],
  }
  
  export default homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH':
        return {
          ...state,
          isFetching: true,
        }
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isFetching: false,
          data: action.data
        }
      case 'FETCH_FAIL':
        return {
          ...state,
          isFetching: false,
        }
        
      default:
        return state;
    }
  }
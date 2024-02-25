// reducers.js
const initialState = {
    total: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NUMBER':
        return {
          ...state,
          total: state.total + action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
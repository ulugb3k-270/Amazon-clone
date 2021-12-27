export const initialState = {
  data: null,
  user: null,
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return {
        state,
      };
  }
};

export default reducer;

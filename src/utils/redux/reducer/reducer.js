const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "UPDATE_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "DELETE_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  todo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GETALL":
      return {
        ...state,
        todo:action.result
      };
    case "ADD":
      return {
        ...state,
        todo:action.result
      };
    case "DELETE":
      return {
        ...state,
        todo:action.result
      };
    case "UPDATE":
      return {
        ...state,
        todo:action.result
      };
    default:
      return state;
  }
};

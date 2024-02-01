const initialState = {
  list: [],
};

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    }
    case "ADD_COUNT": {
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };
    }
    case "REMOVE_COUNT": {
      return {
        ...state,
        list: state.list
          .map((item) =>
            item.id === action.payload
              ? { ...item, count: Math.max(item.count - 1, 0) }
              : item
          )
          .filter((item) => item.count > 0),
      };
    }
    default:
      return state;
  }
};

export { initialState, listReducer };

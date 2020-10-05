const initialState = {
  Data: [],
};

const List = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_MOVIE_SUCCESS':
      state.Data.push(action.data);
      return {
        ...state,
        // Data: Data.push(action.data)
      };
    default:
      return state;
  }
};

export default List;

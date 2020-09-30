const initialState = {
  Data: [],
};

const List = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_SUCCESS':
      return state;
    default:
      return state;
  }
};

export default List;

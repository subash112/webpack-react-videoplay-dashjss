const initialState = {
  Details: null,
};

const Movie = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_DETAILS':
      return {
        Details: action.payload.data
      };
    default:
      return state;
  }
};

export default Movie;

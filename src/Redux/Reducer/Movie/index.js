const initialState = {
  Details: null,
};

const Movie = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_DETAILS_SUCCESS':
      return {
        Details: action.payload.data
      };
    case 'GET_MOVIES_DETAILS_FAILS':
      return {
        Details: null
      }
    default:
      return state;
  }
};

export default Movie;

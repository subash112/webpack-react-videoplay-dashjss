const initialState = {
  Details: null,
};

const Movie = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_DETAIL_SUCCESS':
      return state;
    default:
      return state;
  }
};

export default Movie;

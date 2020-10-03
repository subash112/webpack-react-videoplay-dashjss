import instance from '../../../Utils/axiosConfig';

export const getMovies = (id) => {
  return async (dispatch) => {
    await instance
      .get(`v3/movies/${id}`)
      .then((response) => {
        dispatch({
          type: 'GET_MOVIES_DETAILS',
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

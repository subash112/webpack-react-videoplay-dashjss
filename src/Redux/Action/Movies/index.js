import instance from '../../../Utils/axiosConfig';

export const getMovies = (id) => {
  return async (dispatch) => {
    await instance
      .get(`v3/movies/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'GET_MOVIES_DETAILS_SUCCESS',
            payload: response.data,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: 'GET_MOVIES_DETAILS_FAILS',
        });
      });
  };
};

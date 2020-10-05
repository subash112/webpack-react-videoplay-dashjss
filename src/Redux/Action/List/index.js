import instance from '../../../Utils/axiosConfig';

export const getList = (id) => {
  return async (dispatch) => {
    await instance
      .get(`v3/lists/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: 'LIST_MOVIE_SUCCESS', data: response.data.data });
        }
      })
      .catch((err) => {
        dispatch({ type: 'LIST_MOVIE_SUCCESS_ERROR' });
      });
  };
};

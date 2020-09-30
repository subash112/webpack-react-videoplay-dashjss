import instance from '../../../Utils/axiosConfig';

export const getMovies = () => {
  return async (dispatch) => {
    await instance
      .get('v3/movies/la-fuerza-de-la-naturaleza')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

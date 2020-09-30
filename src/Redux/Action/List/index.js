import instance from '../../../Utils/axiosConfig';

export const getList = () => {
  return async (dispatch) => {
    await instance
      .get('v3/lists/estrenos-para-toda-la-familia')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

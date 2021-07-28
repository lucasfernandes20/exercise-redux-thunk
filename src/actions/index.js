export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI = () => (dispatch) => {
  dispatch(requestAPI());
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((r) => r.json()
      .then(
        (json) => dispatch(getPicture(json.message))).catch((err) => alert(err))
    );
}

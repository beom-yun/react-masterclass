const API_KEY = '054bf0b01347b0d4ed3c19516815888d';
const BASE_PATH = 'https://api.themoviedb.org/3/';

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`).then(response =>
    response.json()
  );
}

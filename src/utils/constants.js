export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_USER_AVTAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmEzZWViM2IzN2NhOWVmZTQ5MzE3MmI2YWI3NWFiZiIsIm5iZiI6MTczMzk4MjQ4OS40MjUsInN1YiI6IjY3NWE3OTE5OGExMmFjODAyZThhM2QxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keMnah71rejm48nRCX3oUXHZFsL6EdtMeTKAOuNH3jE';

export const API_OPTIONS = {
  method: 'GET', 
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    accept: 'application/json'
  }
};

export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/w500';

// LANGUAGE SUPPORT
export const SUPPORTED_LANGUAGES = [
  { id: 'en', name: 'English' },
  { id: 'hi', name: 'Hindi'}
];

// ICONS
export const PLAY = 'https://www.iconsdb.com/icons/preview/black/play-xxl.png';

// APIs
export const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/tv/popular?page=1';
export const TOP_RATED_MOVIES_API = 'https://api.themoviedb.org/3/tv/top_rated?page=1';
export const getMovieVideoApi = (id) => {
  return 'https://api.themoviedb.org/3/movie/' + id + '/videos';
}

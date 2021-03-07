

const app_data = {
    netfix_logo: "https://logotyp.us/file/netflix.svg",
    netflix_background: "https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg",
    avatar: "../../assets/avatar.jpg",
    apikey: "af8b62df"
}

const endPoints = {
    //latestMovies: "http://www.omdbapi.com/?s=Avengers&apikey=af8b62df",
    latestMovies: "http://localhost:5000/Movies",
    favorateMovies: "http://www.omdbapi.com/?s=The+Dark+Knight&apikey=af8b62df",
    movieDeatils: "http://www.omdbapi.com/?t=",
    //registerUser: "http://localhost:3000/api/register",
    registerUser: "http://localhost:5000/users",
    //loginUser: "http://localhost:3000/api/login"
    loginUser: "http://localhost:5000/usersDetails",
    rateMovie: "http://localhost:5000/MovieRating",
    SeenFavMovies: "http://localhost:5000/MovieRating"
}

export const { netfix_logo, netflix_background, avatar, apikey } = app_data;

export const { latestMovies, favorateMovies, movieDeatils, registerUser, loginUser, rateMovie, SeenFavMovies } = endPoints;


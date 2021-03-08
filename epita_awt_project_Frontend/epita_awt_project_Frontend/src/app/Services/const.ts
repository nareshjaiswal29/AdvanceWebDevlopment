

const app_data = {
    netfix_logo: "https://logotyp.us/file/netflix.svg",
    netflix_background: "https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg",
    avatar: "../../assets/avatar.jpg",
    apikey: "af8b62df"
}

const endPoints = {
    latestMovies: "http://localhost:5000/Movies",
    favorateMovies: "http://www.omdbapi.com/?s=The+Dark+Knight&apikey=af8b62df",
    movieDeatils: "http://localhost:5000/Movies",
    registerUser: "http://localhost:5000/users",
    loginUser: "http://localhost:5000/usersDetails",
    rateMovie: "http://localhost:5000/MovieRating",
    SeenFavMovies: "http://localhost:5000/MovieRating",
    movieApiDeatils: "http://www.omdbapi.com/?t="
}

export const { netfix_logo, netflix_background, avatar, apikey } = app_data;

export const { latestMovies, favorateMovies, movieDeatils, registerUser, loginUser, rateMovie, SeenFavMovies,movieApiDeatils } = endPoints;


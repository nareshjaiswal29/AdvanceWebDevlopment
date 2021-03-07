export interface Movies {
    Search: MovieEntity[];
    totalResults: string;
    Response: string;
}

export interface LstMovies {
    
    id:number;
    title:String;
    year:Number
    imdbid: String,
    type: String,
    poster:String;
    plot:String;
    director:String;
    released:String;
}

export interface SeenMovies {
    rating: string;
    userId: string;
    MovieName: string;
    Poster:string;
}

export interface Rating {
    Source: string;
    Value: string;
}

export interface MovieEntity {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface RatingMovies {
    rating: string;
    userId: string;
    MovieName: string;
    poster: string;
}

export interface DetailsMovieEntity {
    title: string;
    plot: string;
    director:string;
    released:string;
    poster:string;
}
import MovieCard from "./Moviecard";

const MovieList = (props) => {
    const { movies, addStars, removeStars, handleFavbtn, handleaddCartbtn } = props;
    return (
        <>
            {movies.map((movie, index) => {
                return (<MovieCard movies={movie} addStars={addStars} removeStars={removeStars} handleFavbtn={handleFavbtn} handleaddCartbtn={handleaddCartbtn} key={index} />)
            })}
        </>
    );
}
MovieCard.defaultProps = {
    title: "The Avengers",
    plot: "Supernatural powers shown in the movie",
    price: 299,
    rating: 8.9,
    starCount: 0,
    fav: false,
    addCart: false
};
export default MovieList;
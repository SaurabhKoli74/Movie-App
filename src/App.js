import MovieList from "./MovieList";
import Navbar from "./Navbar";
import React from "react";
import {movies} from "./movieData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount:0
    }
  }
  addStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].starCount >= 5) {
      return;
    }
    movies[movieId].starCount += 0.5;
    // console.log(this.state.starCount);
    // form 1 (setState)
    // this.setState({
    //     starCount : this.state.starCount+0.5
    // });

    // form 2 (setState)
    this.setState({
      movies: movies
    });
  }
  removeStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].starCount <= 0) {
      return;
    }
    movies[movieId].starCount -= 0.5;
    // console.log(this.state.starCount);
    // form 1 (setState)
    // this.setState({
    //     starCount : this.state.starCount+0.5
    // });

    // form 2 (setState)
    this.setState({
      movies: movies
    });
  }
  handleFavbtn = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
   
    this.setState({
      movies: movies
    });
  }
  handleaddCartbtn = (movie) => {
    let { movies, cartCount} = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].addCart = !movies[movieId].addCart;
    if(movies[movieId].addCart === true){
      cartCount += 1;
    }else{
      cartCount -= 1;
    }
    this.setState({
      movies: movies,
      cartCount: cartCount
    });
  }
  render() {
    const {movies,cartCount} = this.state;
    return (<>
      <Navbar cartCount={cartCount} />
      <MovieList movies={movies} addStars={this.addStars} removeStars={this.removeStars} handleFavbtn={this.handleFavbtn} handleaddCartbtn={this.handleaddCartbtn}   />
    </>);

  };
}


export default App;
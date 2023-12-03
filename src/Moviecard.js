import React from "react";
function MovieCard(props) {
  // const {movies:data} = props;
  // const { title, plot, price, rating, starCount, fav, addCart} = data;
  const { movies, addStars, removeStars, handleFavbtn, handleaddCartbtn } = props;
  const { title, plot, price, rating, starCount, fav, addCart, poster } = movies;
  return (
    <div className="main">
      <div className="movie-card"> 
        <div className="left">
          <img alt={title} src={poster}></img>
        </div>
        <div className="right">
          <div className="title">
            {title}
          </div>
          <div className="plot">
            {plot}
          </div>
          <div className="price">
            Rs.{price}
          </div>
          <div className="footer">
            <div className="rating">
              {rating}
            </div>
            <div className="star-dis">
              <img className="str-btn" alt="minus" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" onClick={() => { removeStars(movies) }} />
              <img className="stars" alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
              <img className="str-btn" alt="plus" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={() => { addStars(movies) }} />
              &nbsp;&nbsp;
              <span className="starCount">
                {starCount}
              </span>
            </div>
            {/* {fav?<button className="favourite-btn" onClick={handleFavbtn}>
                Favourite
              </button>:<button className="unfavourite-btn" onClick={handleFavbtn}>
                Unfavourite
              </button>} */}
            <button className={fav ? "favourite-btn" : "unfavourite-btn"} onClick={() => { handleFavbtn(movies) }}>{fav ? "Favourite" : "Unfavourite"}</button>
            <button className={addCart ? "cart-remove-btn" : "cart-btn"} onClick={() => { handleaddCartbtn(movies) }}>
              {addCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

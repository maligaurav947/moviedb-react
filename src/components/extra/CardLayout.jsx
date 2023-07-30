import React, { useState } from "react";
import { Link } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Cardlayout = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <Link to={`/view/${id}`}>
      <div key={id}>
        <div className="card-card-items">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title}`}
          />
          <div>
            <p>{title}</p>
            <p>Rating: {vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cardlayout;

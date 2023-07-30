import React, { useState } from "react";
import { Link } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Cardlayout = ({ id, title, poster_path, vote_average }) => {
  return (
    <Link to={`/view/${id}`}>
      <div key={id} className="mb-10">
        <div className="grid place-content-center">
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            className="w-[250px]"
            alt={`${title}`}
          />
          <div className="text-white text-center mt-5">
            <p className="">{title}</p>
            <p>Rating: {vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cardlayout;

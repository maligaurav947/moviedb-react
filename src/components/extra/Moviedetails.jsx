import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCast from "./MovieCast";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Moviedetails = ({
  id,
  title,
  poster_path,
  vote_average,
  backdrop_path,
  release_date,
  overview,
  runtime,
  genres,
}) => {
  const Background = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <>
      <div key={id}>
        <div className="movie">
          <div
            style={{
              backgroundImage: `url("${Background}")`,
            }}
            className="movie-details"
          >
            <div className="movie-details-left">
              <div className="movie-details-left-data">
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                </div>
                <div>
                  <h2 className="movie-details-left-data-title">{title}</h2>
                  <p>Rating: {vote_average}</p>
                  <div className="">
                    <button role="" disabled>
                      <span>{runtime} min</span>
                    </button>
                    <span>Science Fiction , Action , Adventure</span>
                  </div>
                  <p>Release Date: {release_date}</p>
                </div>
              </div>
              <div>
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MovieCast id={id} />
      </div>
    </>
  );
};

export default Moviedetails;

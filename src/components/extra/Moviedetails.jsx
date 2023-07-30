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
        <div className=" md:xl:2xl:p-8 text-white">
          <div
            style={{
              backgroundImage: `url("${Background}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundColor: "#0000009b",
              backgroundBlendMode: "darken",
            }}
            className="h-[100%]   rounded-3xl"
          >
            <div className="p-8">
              <div className="md:xl:2xl:flex gap-5">
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    className="h-[100%] md:xl:2xl:h-[250px]"
                  />
                </div>
                <div>
                  <h2 className="text-6xl">{title}</h2>
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
              <div className="mt-10 w-full   ">
                <h3 className="text-2xl  md:xl:2xl:text-4xl mb-2">Overview</h3>
                <p className="text-2xl  md:xl:2xl:text-2xl font-semibold">
                  {overview}
                </p>
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

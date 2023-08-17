import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster_path, vote_average }) => {
  const poster = `https://image.tmdb.org/t/p/w400${poster_path}`;
  return (
    <Link to={`/movie/${id}`}>
      <div key={id} className="relative font-body">
        <div className="grid place-content-center">
          <img
            src={`${poster}`}
            className="w-[250px] rounded-xl card"
            alt={`${title}`}
          />
          <div className="grid place-content-center  h-[50px] w-[50px] bg-black rounded-l-full rounded-b-full relative  top-[-375px] right-[-200px] ">
            <div className="text-green-600 text-4xl font-bold">
              {vote_average}
            </div>
          </div>
        </div>
        <div className=" text-white text-center text-3xl relative top-[-20px] text-title">
          <h1 className="text-[#FFECD1] ">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

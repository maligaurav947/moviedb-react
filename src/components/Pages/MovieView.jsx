import React from "react";
import MovieCastDetails from "./MovieCastDetails";
import { BsPlayCircle, BsCalendarCheck } from "react-icons/bs";
import { BiUpvote } from "react-icons/bi";
const MovieView = ({
  id,
  title,
  vote_average,
  backdrop_path,
  release_date,
  overview,
  runtime,
  homepage,
  tagline,
}) => {
  const Background = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <>
      <div key={id} className="text-white">
        <div className="h-[60vh]">
          <div
            style={{
              backgroundImage: `url("${Background}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "#4947473f",
              backgroundBlendMode: "darken",
            }}
            className="h-[100%]"
          ></div>
        </div>
        <div
          className="p-8 grid gap-5 mt-[-10vh]"
          style={{
            backgroundColor: "#0000009b",
            backgroundBlendMode: "darken",
          }}
        >
          <div className="grid gap-3">
            <div className="text-6xl flex items-center justify-between">
              <h1>{title}</h1>

              <a
                href={homepage}
                className="text-4xl"
                target={"_blank"}
                rel="noreferrer"
              >
                <p>Homepage</p>
              </a>
            </div>
            <h2 className="text-3xl font-light">{tagline}</h2>
            <div className="grid gap-1 grid-cols-3 w-fit">
              <p className="text-3xl flex items-center gap-1">
                <BiUpvote />
                Review: {vote_average}+
              </p>
              <p className="text-3xl flex items-center gap-1">
                <BsPlayCircle /> Play Time: {runtime}Min
              </p>
              <p className="text-3xl flex items-center gap-1">
                <BsCalendarCheck />
                Release Date: {release_date}
              </p>
            </div>
          </div>
          <div className="text-4xl text-justify">
            <p className="text-5xl mb-2">Overview:</p>
            <span className="font-light">{overview}</span>
          </div>
        </div>
      </div>
      <div>
        <MovieCastDetails id={id} />
      </div>
    </>
  );
};

export default MovieView;

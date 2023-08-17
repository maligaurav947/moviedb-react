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
      <div key={id} className="text-white font-body">
        <div className="h-[60vh]">
          <div
            style={{
              backgroundImage: `url("${Background}")`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "#4947473f",
              backgroundBlendMode: "darken",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[100%] "
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
            <div className="text-6xl grid md:xl:2xl:flex gap-6 items-center justify-between">
              <div className="grid gap-1">
                <h1 className="text-rose-600">{title}</h1>
                <h1 className="font-light text-4xl pl-1 font-title ">
                  "{tagline}"
                </h1>
              </div>
              <a
                href={homepage}
                className="button-78 font-body"
                target={"_blank"}
                rel="noreferrer"
              >
                <p>Book Show</p>
              </a>
            </div>
            <div className="grid gap-1 grid-cols-1 md:grid-cols-2 xl:2xl:grid-cols-3 place-content-center w-fit">
              <p className="text-3xl flex items-center gap-1">
                <BiUpvote />
                Review: {vote_average}+
              </p>
              <p className="text-3xl flex items-center gap-1">
                <BsPlayCircle /> Play Time: {runtime}Min
              </p>
              <p className="text-3xl flex items-center gap-1 ">
                <BsCalendarCheck />
                Release Date: {release_date}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-5xl mb-5">Overview:</p>
            <span className="text-4xl font-light">{overview}</span>
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

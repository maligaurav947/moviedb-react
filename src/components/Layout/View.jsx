import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import MovieView from "../Pages/MovieView";
import Header from "../utils/Header";

function View() {
  const [movie, setMovie] = useState();
  var moviesid = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${moviesid.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => error);
  }, [movie]);
  console.log(movie);
  return (
    <>
      <Header />
      <MovieView {...movie} />
    </>
  );
}

export default View;

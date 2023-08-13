import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Pages/MovieCard";
import Header from "../utils/Header";

function TRated() {
  var Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [trated, setTrated] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((res) => {
        setTrated(res.data.results);
      })
      .catch((error) => error);
  });
  return (
    <>
      <Header />
      <div className="mt-10 ">
        <div className="grid grid-cols-1 place-content-center p-5 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
          {" "}
          {trated &&
            trated.map((items) => (
              <>
                <MovieCard key={items.id} {...items} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default TRated;

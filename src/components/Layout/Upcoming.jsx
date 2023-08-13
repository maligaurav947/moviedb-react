import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Pages/MovieCard";
import Header from "../utils/Header";

function Upcoming() {
  var Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [up, setUp] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((res) => {
        setUp(res.data.results);
      })
      .catch((error) => error);
  });
  return (
    <>
      <Header />
      <div className="mt-10 ">
        <div className="grid grid-cols-1 place-content-center p-5 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
          {" "}
          {up &&
            up.map((items) => (
              <>
                <MovieCard key={items.id} {...items} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Upcoming;

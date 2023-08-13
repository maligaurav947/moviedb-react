import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function MovieCastDetails({ id }) {
  const [hero, setHero] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((res) => setHero(res.data.cast))
      .catch((error) => error);
  });
  return (
    <div className="movie-cast mt-5">
      <h1 className="text-8xl pl-6 text-white">Cast:</h1>
      <br />
      <div
        key={id}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-7 p-6 gap-5 text-white"
      >
        {hero &&
          hero.slice(0, 7).map((hero) => (
            <>
              <div key={id}>
                <img
                  src={
                    !hero.profile_path
                      ? "https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-single-person-character-in-vector-png-image_2194492.jpg"
                      : `https://image.tmdb.org/t/p/w500${hero.profile_path}`
                  }
                  alt={hero.name}
                  className="h-[300px] w-[300px] rounded-xl"
                />
                <h2>Real Name: {hero.name}</h2>
                <p>Character Play: {hero.character}</p>
              </div>
            </>
          ))}
        {hero &&
          hero.slice(8, 20).map((hero) => (
            <>
              <div key={id} className="flex flex-col gap-1">
                <img
                  src={
                    !hero.profile_path
                      ? "https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-single-person-character-in-vector-png-image_2194492.jpg"
                      : `https://image.tmdb.org/t/p/w500${hero.profile_path}`
                  }
                  alt={hero.name}
                  className="h-[300px] w-[300px] rounded-xl"
                />
                <div>
                  <h2>Real Name: {hero.name}</h2>
                  <p>Character Play: {hero.character}</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
export default MovieCastDetails;

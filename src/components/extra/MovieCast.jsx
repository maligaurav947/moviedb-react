import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function MovieCast({ id }) {
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
    <div className="movie-cast">
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
                  src={`https://image.tmdb.org/t/p/w500${hero.profile_path}`}
                  alt={hero.name}
                />
                <h2>{hero.name}</h2>
                <p>Character Play: {hero.character}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
export default MovieCast;

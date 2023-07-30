import axios from "axios";
import React, { useEffect, useState } from "react";
import Cardlayout from "./extra/CardLayout";
import Header from "./extra/Header";

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
      <div className="card">
        <div className="card-card">
          {" "}
          {trated &&
            trated.map((items) => (
              <>
                <Cardlayout key={items.id} {...items} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default TRated;

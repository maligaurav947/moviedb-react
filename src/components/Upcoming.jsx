import axios from "axios";
import React, { useEffect, useState } from "react";
import Cardlayout from "./extra/CardLayout";
import Header from "./extra/Header";

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
      <div className="card">
        <div className="card-card">
          {" "}
          {up &&
            up.map((items) => (
              <>
                <Cardlayout key={items.id} {...items} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Upcoming;

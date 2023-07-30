import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./extra/Header";
import Cardlayout from "./extra/CardLayout";

function Home() {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((response) => {
        setItems(response.data.results);
      })
      .catch((error) => error);
  });

  return (
    <>
      <Header />
      <div className="card">
        <div className="card-card">
          {items &&
            items.map((items) => (
              <>
                <>
                  <Cardlayout key={items.id} {...items} />
                </>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;

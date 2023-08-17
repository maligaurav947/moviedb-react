import { useEffect, useState } from "react";
import Router from "./components/Routes/Router";
import Loader from "./components/assets/Loader";
import "./main.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{!loaded ? <Loader /> : <Router />}</>;
}

export default App;

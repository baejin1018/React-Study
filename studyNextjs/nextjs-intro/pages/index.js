import { useEffect, useState } from "react";
import Seo from "../components/Seo";
const API_KEY = "67dc1ea4e0d3c8bd1eda90e64c2451ca";
export default function Home() {
  const [movies, setMovies] = useState([]);
  console.log("hi");
  useEffect(async () => {
    console.log("sdf");
    const data = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
    ).json();
    console.log(data);
  }, []);

  return (
    <div>
      <Seo title={Home}></Seo>
      <h1>Homef</h1>
    </div>
  );
}

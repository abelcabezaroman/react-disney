import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async (actualPage) => {
    const res = await axios.get("https://api.disneyapi.dev/characters?page=" + actualPage);
    console.log(res.data);
    setCharacters(res.data.data);
  };

  useEffect(() => {
    getCharacters(1);
  }, []);

  return (
    <div>
      <Pagination onChangePage={getCharacters}></Pagination>
      <Gallery list={characters}></Gallery>
    </div>
  );
}

import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery";

export default function CharactersPage() {

    const [characters, setCharacters] = useState([]);
    const getCharacters = async () => {
        const res = await axios.get("https://api.disneyapi.dev/characters?page=");
        console.log(res.data)
        setCharacters(res.data.data)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return <div>
        {/* <Pagination onChangePage={getCharacters}></Pagination> */}
        <Gallery list={characters}></Gallery>
        </div>
}
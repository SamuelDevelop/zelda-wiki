import { fetchDataset } from "../utils/fetcher"
import { useEffect, useState } from "react"

type Character = {
    name: string
    description: string
}

function Characters(){
    const [charactersList, setCharactersList] = useState<Character[]>([]);

    useEffect (()=>{
        async function loadCharactersList() {
            const characters = await fetchDataset("characters", 20);
            setCharactersList(characters.data);
        }

        loadCharactersList();
    }, []);

    return (
        <>
            <h1>Lista de Personagens:</h1>

            {charactersList.map((character, index) => (
                <div key={index}>
                    <h2>{character.name}</h2>
                    <p><b>Description:</b> {character.description}</p>
                </div> 
            ))}
        </>
    )
}

export default Characters;
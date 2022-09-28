import "./CharacterGallery.css"
import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


type CharacterGalleryProps = {

    characters: Character[];

}

export default function CharacterGallery(props: CharacterGalleryProps) {

    const [filterText, setFilterText] = useState("");

    const result = props.characters.filter((char) => char.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));

    let hasInput: boolean = result.length > 0;


    return (
        <div>
            <input className={"input"}
                   onChange={(event) =>
                       setFilterText(event.target.value)}/>

            {hasInput ? <h1>The one your looking for ?</h1>
                :
                <h1> The Character you've typed in was not found! </h1>}




            <div className="cards">
                {result.map((char) =>
                    <div className={"card"}>
                        <CharacterCard character={char}/>
                    </div>)}


            </div>

        </div>
    )

}

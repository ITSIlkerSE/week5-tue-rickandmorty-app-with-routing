import {Character} from "../model/Character";
import {type} from "os";
import {Link, NavLink, useParams} from "react-router-dom";
import React from "react";

export type CharacterDetailsProps = {
    characters: Character[]
}


export default function DetailsPage(props: CharacterDetailsProps) {

    const params = useParams()
    const id = params.id

    if (id === undefined) {
        return (<> Id not found ! </>);

    }

    const character = props.characters.find(character => character.id === parseInt(id))

       if(character === undefined) {

           return  (<> Character not found ! </>)
       }


    return (
        <div className={"details"}>
            <Link to ="/">Back</Link>
            <h1>Character</h1>
            <h2>{character.name}</h2>
            <p>Status : {character.status}</p>
            <img src ={character.image} alt={"Character-Avatar"}/>

        </div>
    )
}
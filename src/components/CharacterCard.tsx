import {Character} from "../model/Character";
import "./CharacterCard.css"
import {Link, NavLink, Router} from "react-router-dom";
import React from "react";

type CharacterCardProps = {

    character: Character;

}

export default function CharacterCard(props: CharacterCardProps) {

    return (

        <div className="character-card">
            <Link to ={"/character/" + props.character.id}>
            <h3>{props.character.name} </h3>
            <img src={props.character.image}/>
            <h3>{props.character.species}</h3>
            <p>{props.character.status}</p>
            </Link>
        </div>


    );

}
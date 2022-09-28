import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from './components/CharacterGallery';
import axios from 'axios';
import {HashRouter, Route, Router, Routes} from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";


export default function App() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])


    return (


        <HashRouter>


            <div className={"head"}>

                <h1><img src={"https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"}/></h1>
                <h1></h1>
                <h3></h3>

                <Routes>

                    <Route path={"/"} element={<CharacterGallery characters={characters}/>}/>
                    <Route path={"/character/:id"} element={<DetailsPage characters={characters}/>}/>
                </Routes>

            </div>

        </HashRouter>

    );

}




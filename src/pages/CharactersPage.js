import React from 'react';
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";

const characters = require('../data/characters.json');

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    return (
        <>
            <h1>Marvel Characters</h1>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;
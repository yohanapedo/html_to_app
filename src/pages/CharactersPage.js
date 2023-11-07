import React from 'react';
import { CharactersList } from "../components/CharactersList";
import NumberOfCharacters  from "../components/NumberOfCharacters";

import { useLoaderData } from 'react-router';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    // retrieve the characters using the useLoaderData hook
    const characters = useLoaderData();

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;

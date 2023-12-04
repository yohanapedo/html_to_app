import { Link } from "react-router-dom";
import { compareAsc, format, parseISO } from "date-fns";

export function CharactersList({ characters = [] }) {
    // Sort characters by date
    characters.sort((a, b) => compareAsc(parseISO(a.modified), parseISO(b.modified)));

    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <strong>{character.name}</strong> - {format(parseISO(character.modified), 'MMMM dd, yyyy')}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
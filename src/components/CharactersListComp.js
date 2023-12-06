export function CharactersListCompare({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                        {character.name}
                </li>
            ))}
        </ul>
    );
}
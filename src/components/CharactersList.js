
function CharactersList({characters}){
    return(<ul>
    {characters.map((item, index) => (
        <li key={index}>{item.name}</li> 
    ))}
    </ul>);
    }

export default CharactersList;
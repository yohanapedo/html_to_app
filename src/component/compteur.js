const characters = require("../characters.json");

function NumberCharacters(){
    return(<h1>Number of char : {characters.length}</h1>)

}

export default NumberCharacters;
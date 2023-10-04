import logo from './logo.svg';
import './App.css';
import ListeCharacters from './component/liste';
import Title from './component/titre';
import NumberCharacters from './component/compteur';

function App() {
return (
 <>
 {/* 
 La propriété id et data-demo sont passées au composant Title grâce au spread operator.
 La propriété color est définie dans le composant Title
 */}
 <Title color="black" id="my-id" data-demo="demo">Liste de personnage</Title>
 <ListeCharacters></ListeCharacters>
<NumberCharacters/>
</>
);
}

export default App;
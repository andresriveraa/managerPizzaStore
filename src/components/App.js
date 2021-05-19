import './App.css';
import GetAllIngredients from "../containers/Ingredients";
import IngredientsInPizza from '../containers/IngredientsInPizza';

const App = () => {
  return (
    <div className="App">
      <GetAllIngredients />
      <IngredientsInPizza />
    </div>
  );
}

export default App

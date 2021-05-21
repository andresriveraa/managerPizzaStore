import './App.css';
import {
  GetAllIngredients,
  IngredientsInPizza,
  ConfirmPizza
} from "../containers/";
import GlobalStyle from '../GlobalStyles'
import { connect } from 'react-redux';

const App = ({modal}) => {
  return (
    <div className="App">
      <GlobalStyle/>
      <GetAllIngredients />
      <IngredientsInPizza />
      {
        modal && (
          <ConfirmPizza />
        )
      }
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.pizza.modal
})

export default connect(mapStateToProps, null)(App) 

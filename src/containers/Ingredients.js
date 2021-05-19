import { connect } from 'react-redux'
import { ListIngredients } from "../components";
import { setIngredientsPizza } from "../actions";

const mapStateToProps = state => ({
   ingredients: state.allIngredients,
   ingredientsPizza: state.ingredientsInPizza
})

const mapDispatchToProps = dispatch => ({
   onIngredientClick: (name) => dispatch(setIngredientsPizza(name))
})

const getAllIngredients = connect(mapStateToProps, mapDispatchToProps)(ListIngredients)

export default getAllIngredients
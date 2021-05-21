import { connect } from 'react-redux'
import { ListIngredientsInPizza } from "../components";
import {
  deleteIngredientsPizza,
  deleteIngredientName, 
  setFinalName,
  setPricePizza,
  closeModal,
} from "../actions";

const mapStateToProps = state => ({
  ingredients: state.ingredientsInPizza,
  namePizza: state.pizza.name
})

const mapDispatchToProps = dispatch => ({
  onDeleteItem: id => dispatch(deleteIngredientsPizza(id)),
  deleteSylName: syl => dispatch(deleteIngredientName(syl)),
  finalName: name => dispatch(setFinalName(name)),
  pizzaPrice: price => dispatch(setPricePizza(price)),
  closeModal: bool => dispatch(closeModal(bool)),
})

const IngredientsInPizza = connect(mapStateToProps, mapDispatchToProps)(ListIngredientsInPizza)

export default IngredientsInPizza
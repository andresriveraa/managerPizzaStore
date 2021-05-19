import { connect } from 'react-redux'
import { ListIngredientsInPizza } from "../components";


const mapStateToProps = state => ({
  ingredients: state.ingredientsInPizza
})

const IngredientsInPizza = connect(mapStateToProps, null)(ListIngredientsInPizza)

export default IngredientsInPizza
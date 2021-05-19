import allIngredients from './ingredients'
import ingredientsInPizza from './ingredientsInPizza'
import { createStore } from 'redux';
import globalReducer from '../reducers'

export const initialState = {
  allIngredients,
  ingredientsInPizza,
}
const store = createStore(globalReducer, initialState) 

export default store
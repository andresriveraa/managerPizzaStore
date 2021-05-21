import allIngredients from './ingredients'
import ingredientsInPizza from './ingredientsInPizza'
import pizza from './pizza'
import salesDay from './salesPerDay'
import salesMonth from './salesPerMonth'
import usersInfo from "./user";
import { createStore } from 'redux';
import globalReducer from '../reducers'

export const initialState = {
  allIngredients,
  ingredientsInPizza,
  pizza,
  salesDay,
  salesMonth,
  usersInfo
}

const store = createStore(globalReducer, initialState) 

export default store
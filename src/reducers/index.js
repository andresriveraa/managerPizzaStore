import * as types from '../constants/ActionTypes';
import { initialState } from '../store';
import ingredientsInPizza from '../store/ingredientsInPizza';

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INGREDIENTS_PIZZA:
      return {
        ...state,
        ingredientsInPizza: [
          ...state.ingredientsInPizza,
          action.ingredient
        ]        
      }
      
    case types.DELETE_INGREDIENT_PIZZA:
      return {
        ...state,
        ingredientsInPizza: state.ingredientsInPizza.filter(({id}) => id !== action.ingredientId)
      }
      break;

    case types.SET_NAME_PIZZA:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          name: [
            ...state.pizza.name,
            action.syllable
          ]
        }
    }
      break;

    case types.DELETE_INGREDIENT_NAME:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          name: state.pizza.name.filter((syl) => syl !== action.syllable)
      }
    }

    case types.SET_FINAL_NAME:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          finalName: action.name
        }
      }

    case types.SET_PRICE_PIZZA:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          price: action.price

        }
      }

      // terminar ser info
    case types.SET_INFO_USER:
      return{
        ...state,
        usersInfo: [
          ...state.usersInfo,
          action.info,
        ],
      }

    case types.CLOSE_MODAL:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          modal: action.bool
        }
      }
    default:
      return state
  }
}


  export default globalReducer
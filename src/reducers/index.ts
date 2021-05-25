import * as types from '../constants/ActionTypes';
import { initialState } from '../store';

const globalReducer = (state = initialState, action: actionGlobal) => {
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
      const find = state.usersInfo.find(user => user.id === action.info.id)
      if (find) {
        return state
      } else return {
        ...state,
        usersInfo: [
          ...state.usersInfo,
          action.info
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

    case types.ADD_SALE:
      return {
        ...state,
        sales: [
          ...state.sales,
          action.sale
        ]
      }
    default:
      return state
  }
}


  export default globalReducer
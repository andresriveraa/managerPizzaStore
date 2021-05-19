import { act } from 'react-dom/test-utils';
import * as types from '../constants/ActionTypes';
import { initialState } from '../store';

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
      
    default:
      return state
  }
}


  export default globalReducer
import * as types from '../constants/ActionTypes'

export const setIngredientsPizza = ingredient => ({
  type: types.SET_INGREDIENTS_PIZZA,
  ingredient
})

export const getIngredientsPizza = ingredientId => ({
  type: types.DELETE_INGREDIENTS_PIZZA,
  ingredientId
})
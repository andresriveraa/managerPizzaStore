import * as types from '../constants/ActionTypes'

export const setIngredientsPizza = ingredient => ({
  type: types.SET_INGREDIENTS_PIZZA,
  ingredient
})

export const deleteIngredientsPizza = ingredientId => ({
  type: types.DELETE_INGREDIENT_PIZZA,
  ingredientId
})

export const setNamePizza = syllable => ({
  type: types.SET_NAME_PIZZA,
  syllable
})

export const deleteIngredientName = syllable => ({
  type: types.DELETE_INGREDIENT_NAME,
  syllable
})

export const setFinalName = name => ({
  type: types.SET_FINAL_NAME,
  name
})

export const setPricePizza = price => ({
  type: types.SET_PRICE_PIZZA,
  price
})

export const setInfoUser  = info => ({
  type: types.SET_INFO_USER,
  info
})

export const closeModal = bool => ({
  type: types.CLOSE_MODAL,
  bool
})

export const addSale = sale => ({
  type: types.ADD_SALE,
  sale
})
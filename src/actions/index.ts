import * as types from '../constants/ActionTypes'


// recibe un objeto con el id precio y nombre
export const  setIngredientsPizza = (ingredient: IIngredientPizza): object => ({
  type: types.SET_INGREDIENTS_PIZZA,
  ingredient
})

export const deleteIngredientsPizza = (ingredientId: number) => ({
  type: types.DELETE_INGREDIENT_PIZZA,
  ingredientId
})

export const setNamePizza = (syllable: string )=> ({
  type: types.SET_NAME_PIZZA,
  syllable
})

export const deleteIngredientName = (syllable: string) => ({
  type: types.DELETE_INGREDIENT_NAME,
  syllable
})

export const setFinalName = (name: string) => ({
  type: types.SET_FINAL_NAME,
  name
})

export const setPricePizza = (price: number) => ({
  type: types.SET_PRICE_PIZZA,
  price
})

export const setInfoUser  = (info: IInfoUser) => ({
  type: types.SET_INFO_USER,
  info
})

export const closeModal = (bool: boolean) => ({
  type: types.CLOSE_MODAL,
  bool
})

export const addSale = (sale: ISale) => ({
  type: types.ADD_SALE,
  sale
})
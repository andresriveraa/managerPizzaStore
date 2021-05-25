/// <reference types="react-scripts" />

interface IIngredientPizza {
  id: number
  price: number
  name: string
}

interface IInfoUser {
  id: number
  name: string
  number: string
}

interface ISale {
  id: number
  pizzaName: string
  price: number
}

type ArticleState = {
  articles: IArticle[]
}

type PizzaAction = {
  type: string
  ingredient: IArticle
}

type infouser = {
  id: number | string
  name: string
  number: string
}

interface actionGlobal {
  ingredient: object
  type: string
  syllable: string
  name: string
  price: number
  info: infouser
  ingredientId: number
  bool: boolean
  sale: object
}

// type DispatchType = (args: ArticleAction) => ArticleAction

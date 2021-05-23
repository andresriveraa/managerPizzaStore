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

// type ArticleAction = {
//   type: string
//   article: IArticle
// }

// type DispatchType = (args: ArticleAction) => ArticleAction

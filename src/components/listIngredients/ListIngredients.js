import { useState, useEffect } from 'react'
import Wrapp from './styles'

export default function ListIngredients({
  ingredients,
  onIngredientClick,
  ingredientsPizza,
  createNamePizza
}) {
  const sortWord = syl => {
    createNamePizza(syl)
  }
  const addIng = ingredient => {
    const exist = ingredientsPizza.find( item => item.id === ingredient.id)
    if(!exist) {
      onIngredientClick(ingredient)
      sortWord(ingredient.name.slice(0,3))
  }}
  
  useEffect(() => {
    addIng(ingredients.find(ing => ing.name === 'masa'))
  }, [])

  return (
    <Wrapp>
      <h1>Ingredients</h1>
      <div className="grid">
        {ingredients.map( ing => {
          return <div key={ing.name}>
              <p >{ing.name}</p>
              <button onClick={() => addIng(ing)}>add</button>
            </div>
        })}
      </div>
    </Wrapp>
  )
}

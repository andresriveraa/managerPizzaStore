import { Button } from 'antd'
import Title from 'antd/lib/typography/Title'
import React, { useState, useEffect } from 'react'
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
      <Title level={1} style={{textAlign: 'center'}}>Ingredients</Title>
      <div className="grid">
        {ingredients.map( ing => {
          return <div key={ing.name}>
              <p >{ing.name}</p>
              <Button type="primary" size="middle" onClick={() => addIng(ing)}>add</Button>
            </div>
        })}
      </div>
    </Wrapp>
  )
}

import Wrapp from './styles'

export default function ListIngredients({ingredients, onIngredientClick, ingredientsPizza}) {
  
  const addIng = (ingredient) => {
    const exist = ingredientsPizza.find( item => item.id === ingredient.id)
    if(!exist) onIngredientClick(ingredient)
  }
  
  return (
    <Wrapp>
      <h1>hello ingredients</h1>
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

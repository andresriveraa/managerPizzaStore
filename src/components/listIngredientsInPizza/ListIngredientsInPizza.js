const ListIngredientsInPizza = ({ingredients}) => {
  return (
    <div>
      <p>hello ingredient in pizza</p>
      {
        ingredients.map(ingredient => {
          return <div key={ingredient.id}>
            <p>{ingredient.name}</p>
          </div>
        })
      }
    </div>
  )
}

export default ListIngredientsInPizza
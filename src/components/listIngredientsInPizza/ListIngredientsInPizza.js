import React from 'react'
import Wrapp from './styles'
import { Button } from 'antd'
import Title from 'antd/lib/typography/Title';

const ListIngredientsInPizza = ({
  ingredients,
  onDeleteItem,
  namePizza,
  deleteSylName,
  finalName,
  pizzaPrice,
  closeModal
}) => {
  
  const deleteItem = (ingre) => {
    onDeleteItem(ingre.id)
    deleteSylName(ingre.name.slice(0, 3))
  }

  const selectPizza = () => {
    finalName(namePizza.sort().reduce((accummulator, actualVAlor) => accummulator + actualVAlor))
    pizzaPrice(ingredients.reduce((accumulator, {price}) => accumulator + price, 0))
    closeModal(true)
  }

  return (
    <Wrapp>
      <Title level={2} style={{marginTop: 50, textAlign: 'center'}}>Ingredients in pizza</Title>
      <div className="gridingredientPizza">
        {
          ingredients.map(ingredient => {
            return <div key={ingredient.id}>
              <p>{ingredient.name}</p>
              <Button danger onClick={() => deleteItem(ingredient)}>Delet</Button>
            </div>
          })
        }
      </div>
      <div className="pay">
        <h2>Precio Pizza</h2>
        <Button onClick={selectPizza} type="primary" danger>
          Pagar: $
          {
            ingredients.reduce((accumulator, {price}) => accumulator + price, 0)
          }
        </Button>
        <h2>Nombre Pizza</h2>
        <p>
          {
            namePizza.sort().reduce((accummulator, actualVAlor) => accummulator + actualVAlor)
          }
        </p>
      </div>
    </Wrapp>
  )
}

export default ListIngredientsInPizza
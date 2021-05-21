import { PayCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import Wrapp from './styles'

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
      <p className="titlePizza">Ingredients in pizza</p>
      <div className="gridingredientPizza">
        {
          ingredients.map(ingredient => {
            return <div key={ingredient.id}>
              <p>{ingredient.name}</p>
              <button onClick={() => deleteItem(ingredient)}>Delet</button>
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
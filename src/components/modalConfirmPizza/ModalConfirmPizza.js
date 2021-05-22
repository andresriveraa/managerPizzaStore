import React, {useState} from 'react'
import Wrapp, {
  Modal
} from './styles'
import { Form, Input, Button, Checkbox} from 'antd';


export default function ModalConfirmPizza ({
  price,
  pizzaName,
  closeModal,
  setInfoData
}) {
  const day = new Date()
  const [formData, updateFormData] = useState({
    name: '',
    number:'',
    pizzasCompradas: {
      pizzaName: pizzaName,
      price: price,
      date: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`
    }
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name !== '' && formData.number !== '') {
      setInfoData(formData)
      closeModal(false)
    } else {
      alert('hace falta datos')
    }
  };

  return (
    <Wrapp>
      <Modal>
        <Form>
          <p>
            Confimación de pizza
          </p>
          <Form.Item>
            <Input 
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              name="name"
            />
          </Form.Item>
          <label>
            <Input
            type="text"
            placeholder="Teléfono"
            onChange={handleChange}
            name="number"
            />
          </label>
          <div className="date">

          </div>
          {
          `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`
          }
          <p>total pizza: ${price}</p>
          <div className="buttons">
            <Button type="primary" onClick={handleSubmit}>Confirmar</Button>
            <Button onClick={() => closeModal(false)}>cerrar modal</Button>

          </div>
        </Form>

      </Modal>
    </Wrapp>
  )
  
};

import styled from 'styled-components'

const Wrapp = styled.div`
.titlePizza {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
}
.gridingredientPizza {
    width: 600px;
    margin: auto;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(5, 120px) 
 }
.pay {
  h2 {
    margin-bottom: 16px;
  }
  width: 300px;
  background-color: white;
  border-radius: 15px;
  padding: 16px;
  margin: 40px auto;
}
`;

export default Wrapp
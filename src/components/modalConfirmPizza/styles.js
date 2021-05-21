import styled from 'styled-components';

const Wrapp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4e4d4d8a;
  z-index: 200;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Modal = styled.div`
  background-color: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 15px;
  color: white;
  
`;

export default Wrapp
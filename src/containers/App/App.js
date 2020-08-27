import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo/Todo';
import Footer from '../../components/Footer/Footer'

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 90px;
  color: #ffcccc;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Wrap = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrap>
      <Title>todo app</Title>
      <Todo />
      <Footer />
    </Wrap>
  );
}

export default App;

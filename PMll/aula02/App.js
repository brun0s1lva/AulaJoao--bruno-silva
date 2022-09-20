import React from 'react';
import styled from 'styled-components/native';
import bruno from './assets/img/coisa-linda.jpg';
import coracao from './assets/img/coracaodelys.gif';

const Imagem1 = styled.Image`
width: 200px;
border-width: 5px;
height: 200px;
border: 2px solid yellow;
border-radius: 100px;
display: flex;
margin-bottom: 400px;
margin-right: 150px;
`;

const Imagem2 = styled.Image`

padding-top:10px;
  width: 200px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #0147;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
color: yellow;
text-align: center;
font-size: 16px;
margin-right: 190px;
padding: 10px;
`;
export default () => (
  <Container>
    <Title>A coisa mais linda do mundo   
    </Title>
    <Imagem1 source={bruno}/>
    <Imagem2 source={coracao}/>
  </Container>
);
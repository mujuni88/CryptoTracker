import React from 'react'
import styled from 'styled-components/native'


const HeaderContainer = styled.View`
  display: flex;
  margin-top: 55px;
  align-items: center;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 20;
`

const Header = () => (  
  <HeaderContainer>
    <Title>Cryptocurrency Tracker</Title>
  </HeaderContainer>
)

export default Header

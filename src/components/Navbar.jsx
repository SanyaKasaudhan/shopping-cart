import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:60px;
background-color:yellow;
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`

const Left=styled.div`
  width:33.3%;
  display:flex;
  align-items:center;
`
const Language=styled.div`
  font-size:14px;
  cursor:pointer;

`
const SearchContainer=styled.div`
 border:1px solid lightgray;
`

const Right=styled.div`
width:33.3%;
`

const Center=styled.div`
width:33.3%;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <SearchContainer>
            <Search />
            input
            </SearchContainer>
            en</Language>
         
          </Left>
        <Center>
          Center
        </Center>
        <Right>
          Right
        </Right>
      </Wrapper>
      



    </Container>
  )
}

export default Navbar
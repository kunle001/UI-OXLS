import { Badge } from '@material-ui/core'
import { PublicRounded, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";


const Container= styled.div`
    height: 100px;
    ${mobile({height:"30px"})};
    background-color:rgb(147, 170, 139);
`
const Wrapper= styled.div`
    padding: 20px 20px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`
const Left= styled.div`
    flex:1;
`
const Center= styled.div`
    flex:1;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 60px;
    font-family: 'Trebuchet MS', sans-serif;
    text-align:center;
    ${mobile({fontSize:"24px"})}
`;

const Right= styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:2,justifyContent:"center"})}
`
const SearchContainer= styled.div`
    border:none;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input= styled.input`
    border:none;
    ${mobile({width:"50px"})}
`
const MenuItem= styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
    ${mobile({fontSize:"10px", marginLeft:"10px"})}
`;

const Credits= styled.h1`
    font-weight:900;
    color: 'green';
    font-size: 40px;
    padding:10px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>OXLS</Logo></Center>
            <Right>
                <MenuItem>COURSE CREDITS:</MenuItem>
                <Credits>$0</Credits>
                <MenuItem>BOOK QUICK CLASS</MenuItem>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
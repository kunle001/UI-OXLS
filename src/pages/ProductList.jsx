import styled from "styled-components"
import Announcements from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container= styled.div``
const FilterContainer=  styled.div`
    display:flex;
    justify-content:space-between;
`
const Title= styled.h1`
font-weight:900;
margin:20px;
`
const Filter= styled.div`
    margin:20px;
    ${mobile({width: "0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText= styled.h3`
  font-size:20px;
  font-weight:600;
  margin-right:20px;
  ${mobile({marginRight:"0px"})}
`

const Select= styled.select`
  padding:10px;
  margin-right:20px;
  ${mobile({margin:"10px 0px"})}

`
const Option= styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcements/>
      <Navbar/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products By
          </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products By
          </FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList

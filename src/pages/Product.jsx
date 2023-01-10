import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { mobile } from "../responsive"

const Container= styled.div``
const Wrapper= styled.div`
    padding:50px;
    display:flex;
    ${mobile({flexDirection:"column"})}
`
const ImgContainer= styled.div`
    flex:1
`
const Image= styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    z-index:2;
    ${mobile({height:"50%"})}
`
const InfoContainer= styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding: "2px"})}
    `
const Title= styled.h1`
    font-weight:900
`
const Desc= styled.p`
    margin:20px 0px;
    font-weight:700;
`
const Price= styled.span`
    font-weight:100;
    font-size:40px;
    ${mobile({color:"green"})}
`

const FilterContainer= styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin:30px 0px;
    ${mobile({width:"100%"})}

`
const FilterColor= styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color };
    margin:0px 5px;
    cursor: pointer;
`

const FilterTitle= styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterSize= styled.select`
    margin-left: 10px;
    padding:5px;
`
const FilterSizeOption= styled.option``
const Filter= styled.div`
    display:flex;
    align-items:center;
`;
const AddContainer= styled.div`
    display flex;
    width:50%;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:"100%"})}
`;
const AmountContainer= styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount= styled.div`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;
const Button= styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:800;

    &:hover{
        background-color:#f8f4f4
    }
`;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim JumpSuit</Title>
            <Desc>
                Nice Top you will most definately love it,
                we will continue to be your plug till forever, 
                we concede plessure in attending to you.
                help us help you. 
                The ceo, Adekunle is available for anything giving
                you any information directlt.
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray "/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product

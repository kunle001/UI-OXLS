import styled from "styled-components"
import Announcements from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`
  padding-left: 3px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "")};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => (props.type === "filled" && "white")};
`

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const Wrapper = styled.div``
const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

// const ProductColor = styled.div`
//   width: 45px;
//   height: 20px;
//   border-radius: 20px;
//   background-color: ${(props) => props.color};
// `

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`
const ProductID = styled.span``
const ProductName = styled.span``
const ProductSize = styled.div``
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content:space-around;
`

const Image= styled.img`
width:400px;
${mobile({width:"100%"})}
`
const ProductColor = styled.div`
  width: 45px;
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProductPrice= styled.div`
    align-items:center;
    justify-content:center;
    font-weight:700;
    color:green;
    ${mobile({marginBottom:"20px", fontSize:"25px"})}
`;

const Summary= styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height:50vh;
`;

const SummaryTitle= styled.h1`
    font-weight: 200;
`;

const SummaryItemPrice= styled.span`

`
const SummaryItemText= styled.span``
const SummaryItem= styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${(props)=>props.type=== "total"?"900" :"200" };
    font-size: ${(props)=>props.type=== "total" && "24px" };
`
const Button= styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    cursor:pointer;
    border-radius:5px;
    font-weight:600;
`


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <Title>COURSE CART</Title>
        <Top>
        <TopButton>CHECK MORE COURSES</TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Buttom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://www.worddive.com/blog/wp-content/uploads/2017/06/shutterstock_309241937.jpg"/>
                        <Details>
                            <ProductName><b>Teacher:</b>ANNALEASE</ProductName>
                            <ProductID><b>Language:</b> Russian to English</ProductID>
                            <ProductColor color="rgb(171, 188, 165)"><ProductPrice>$30</ProductPrice></ProductColor>
                            <ProductSize><b>Rating:</b>4.8/5</ProductSize>
                        </Details>
                    </ProductDetail>
                </Product>
                <Hr/>
                <ProductDetail>
                        <Image src="https://fthmb.tqn.com/bzCTJWqcE4bZCuV_XXuCJw6zfMo=/2121x1414/filters:fill(auto,1)/GettyImages-548929135-59f24924d088c000104ed810.jpg"/>
                        <Details>
                            <ProductName><b>Teacher:</b>JENNA</ProductName>
                            <ProductID><b>Language:</b> Russian to English</ProductID>
                            <ProductColor color="rgb(171, 188, 165)"><ProductPrice>$100</ProductPrice></ProductColor>
                            <ProductSize><b>Rating:</b>4.8/5</ProductSize>
                        </Details>
                </ProductDetail>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemPrice>$130</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Discount coupon</SummaryItemText>
                    <SummaryItemPrice>- $8</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$122</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Buttom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart

import { Add, Remove } from "@material-ui/icons"
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

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px", justifyContent: "center" })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

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
width:200px;
${mobile({width:"100%"})}
`
const ProductAmount= styled.div`
font-size:24px;
margin:0px;
${mobile({fontSize:"15px"})}
`
const ProductAmountContainer= styled.div`
    display:flex;
    align-items:center;
    padding-top: 200px;
    ${mobile({margin:"5px 15px", paddingTop:"0px"})}
    `
const ProductPrice= styled.div`
    font-size:30px;
    font-weight:200;
    margin:5px;
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
        <Title>YOUR BAG</Title>
        <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
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
                        <Image src="https://cdna.lystit.com/photos/2013/12/05/bally-bally-red-leather-hightop-sneakers-product-1-15896718-640660930.jpeg"/>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER</ProductName>
                            <ProductID><b>ID:</b>923456712</ProductID>
                            <ProductColor color="red"/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice> $ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://th.bing.com/th/id/R.686361cbaba47a19636b12b4272a54e9?rik=FXytHlhyCk0Ong&pid=ImgRaw&r=0"/>
                        <Details>
                            <ProductName><b>Product:</b>SHIRT</ProductName>
                            <ProductID><b>ID:</b>12356712</ProductID>
                            <ProductColor color="gray"/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>4</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$80</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemPrice>$170</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$4</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>- $8</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$164</SummaryItemPrice>
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

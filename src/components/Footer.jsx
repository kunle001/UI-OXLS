import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'
const Container= styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})};
    background-color:rgb(147, 170, 139);
    margin-top:50px;
`
const Left= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo= styled.h1`
`
const Desc= styled.p`
    margin:20px 0px        
`
const SocialContainer= styled.div`
    display:flex;
`
const SocialIcon= styled.div`
    width:40px;
    height:40px;
    border-radius:50%;;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #${props=> props.color};
    margin-right:20px;
`

const Right= styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})}
`
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`
const Title= styled.h3`
    margin-buttom:30px;
`

const List= styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`

const ListItem= styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Payment= styled.img`
    width:100%
`
const ContactItem= styled.div`
    margin-bottom:20px;
    display:flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> OXLS </Logo>
        <Desc>
            a market to get all thrift,new
            Everything ,Products,Even Longlife and prosperity,
             missing out on this awesome platform will be a shame
        </Desc>
        <SocialContainer>
            <SocialIcon color="385999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="385999">
                <LinkedIn/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accesories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
        <Room style={{marginRight:"10px"}}/> 2,ikosi Road iyesi Ota, Ogun State
        </ContactItem>
        <ContactItem>
        <Phone style={{marginRight:"10px"}}/>+234 7039365725
        </ContactItem>
        <ContactItem>
        <Email style={{marginRight:"10px"}}/>adekunle.olanipekun@gmail.com
        </ContactItem>
        <Payment src= "https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer

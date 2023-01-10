import styled from "styled-components"
import { mobile } from "../responsive"

const Container= styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://img.huffingtonpost.com/asset/5ec5e24e300000281f1565ed.jpeg?ops=1778_1000")
      center;
      backdrop-blur: 10px;
      background-size:cover;

    display:flex;
    align-items:center;
`
const Input= styled.input`
   flex:1;
   min-width: 40%;
   margin:20px 10px 0px 0px;
   padding:10px;
   border-radius:10px;
`
const Agreement= styled.span`
   font-size:12px;
   margin:20px 0px
`
const Button= styled.button`
    padding:15px 20px;
    width:40%;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin:auto;
    ${mobile({width:"100%"})}
`
const Form= styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  background-color: transparent;
  margin: 0 auto;
  ${mobile({width:"75%"})}
`;

const Title= styled.h1`
    font-size:24px;
    font-weight:300
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder= "email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm-password"/>
                <Agreement>
                    By Creating account, i consent to the processing if my 
                    personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register

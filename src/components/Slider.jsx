import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useEffect } from 'react'
import {React, useState} from 'react'
import styled from 'styled-components'
import {SliderItems} from "../data"
import { mobile } from '../responsive'

const Container= styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({display:"none"})}
`
const Arrow= styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius: 50%;
    display:flex;align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction==="left" && "10px"}; 
    right:${props=> props.direction==="right" && "10px"}; 
    margin:auto;
    cursor:pointer;
    opacity:0.3;
    z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 2s ease;
  
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #${props => props.bg};
`;

const Image= styled.img`
    height:100%;
`

const ImgContainer = styled.div`
  width: 70%;
  height: 100%;
  display:flex;
`;

const InfoContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 20% 35% 0px 24%;
`;

const Title= styled.h1`
    font-size: 70px;
    font-weight: 900px;
`
const Desc= styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight:10000;
    letter-spacing:3px
`
const Button= styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Slider = () => {
   const [slideIndex, setSlideIndex]= useState(0);

   useEffect(()=>{
    const intervalId= setInterval(()=>{
        setSlideIndex(slideIndex<2 ? slideIndex +1 :0);
    },5000);

    return()=> clearInterval(intervalId);
   }, [slideIndex]);

  const handleClick= (direction)=>{
    if(direction==="left"){
        setSlideIndex(slideIndex>0 ? slideIndex-1:2)
    }else{
        setSlideIndex(slideIndex<2 ? slideIndex+1:0)
    }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {SliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                        <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>JOIN CLASS</Button>
                    </InfoContainer> 
                </ImgContainer>
           
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
        
    </Container>
  )
}

export default Slider

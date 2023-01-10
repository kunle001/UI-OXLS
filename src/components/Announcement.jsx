import styled from 'styled-components';
import { mobile } from '../responsive';

const Container= styled.div`
    height: 30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    ${mobile({margin:"7px 0px"})}
`

const Announcements= ()=>{
    return(
        <Container>
            super deal free shipping!
        </Container>
    )
};

export default Announcements
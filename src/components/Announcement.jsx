import styled from 'styled-components';
import { mobile } from '../responsive';

const Container= styled.div`
    height: 30px;
    background-color:rgb(203, 238, 191);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    ${mobile({margin:"7px 0px"})}
`
const Link= styled.a`
    cursor:pointer;
    font-weight:900;
    color:brown;
    font-style:unset;
    padding:5px;
`;
const Text= styled.div`
    color:black;
    font-weight:999;
`

const Announcements= ()=>{
    return(
        <Container>
            <Text>
                festive discount on our courses, hop on!!
            </Text>
            <Link href='/discount-prices'>check it out</Link>
        </Container>
    )
};

export default Announcements
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcement';
import { CheckCircleOutline, HelpOutline } from '@material-ui/icons';

const Container= styled.div``

const Wrapper= styled.div`
    padding:30px ;
    display:flex
`

const TeacherImage = styled.img`
  width: 98%;
  height: 300px;
  padding:2px;
  border-radius: 10px;

`;

const ActivePanel= styled.div`
    display:flex;
    padding:8px 5px 3px 7px;
`;

const LeftPanel= styled.div`
    padding:8px 5px 3px 7px;
`;
const TeacherDesc= styled.span`
    font-family: 'Trebuchet MS';
    color: gray;
    font-size:12px;
`;
const Info= styled.div`
    padding: 0px 6px 15px 80px;
    margin-top:0px

`

const COmpletedClasses= styled.span`
    padding:5px 0px 3px 20px;
    font-style: italic;
    font-weight:300;
    
`;

const Trial= styled.h3`
    font-weight:900;
    font-size:30px;
`

const TeacherProfilePics= styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
`;

const Languages= styled.div`
`;

const Language= styled.p`
`

const Details= styled.div`
    display:flex;
    justify-content:space-between;
    height:50px;
`;

const RightDetails= styled.div`
    margin:3px;
    display:flex;
`

const TeachersDetails= styled.div`
    flex:1;
    display:flex;
    width:600px;
    flex-direction: column;
    border-radius:10px;
    background-color:lightgray;
`;

const TeachersName= styled.h3`
    font-weight:900;
    padding-left:20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  margin-top:50px;
  height: 1px;
`

const Online= styled.div`
    justify-content:center;
    align-items:center;
    color:green;
    padding: 1px 0px 2px 0px;
`;

const Help= styled.div`
    
`

const AllInfo= styled.div`
    flex:2;
    padding:30px;
    margin-left:5px;
    background-color:#eee;
    border-radius:15px
`;

const About= styled.div`
`;


const AboutDetails= styled.p``



const BookButton= styled.button`
    margin-top:80px;
    background-color:brown;
    color:white;
    font-weight:bold;
    padding:10px;
    border-radius:5px;
    border:none;
    width:70%;
    margin-left:45px;
    margin-bottom:8px;

`;
const ContactButton= styled.button`
    background-color:white;
    color:black;
    font-weight:bold;
    padding:10px;
    border-radius:5px;
    border:none;
    width:70%;
    margin-left:45px;
    margin-bottom:8px;
`;

const Title= styled.h3``;

const FullDetails= styled.div`
    height: 100px;
`;

const FullDetailsImage= styled.img`
    height:100%;
    width:15%;
    border-radius:50%;
    padding-right:0px;
`;



const TeacherProfile = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <TeachersDetails>
                <TeacherImage src='https://www.worddive.com/blog/wp-content/uploads/2017/06/shutterstock_309241937.jpg'/>
                <LeftPanel>
                    <Details>
                        <Trial>
                            Trial Class for $ 5
                        </Trial>
                        <Help>
                            <HelpOutline/>
                        </Help>
                    </Details>
                    <COmpletedClasses>50 classes completed</COmpletedClasses>
                </LeftPanel>
                <Hr/>
                <BookButton>Book A Free Trial</BookButton>
                <ContactButton>Contact Teacher</ContactButton>
            </TeachersDetails>
            <AllInfo>
                <FullDetails>
                    <ActivePanel>
                        <TeacherProfilePics src='https://www.worddive.com/blog/wp-content/uploads/2017/06/shutterstock_309241937.jpg'/>
                        <RightDetails>
                            <TeachersName>ANALEASE</TeachersName>
                            <Online>
                                <CheckCircleOutline/>
                            </Online>
                        </RightDetails>
                    </ActivePanel>
                    <Info>
                        <TeacherDesc>PROFESSIONAL TEACHER</TeacherDesc>
                    </Info>
                </FullDetails>
                    <Title>
                        About me
                    </Title>
                    <AboutDetails>
                        vacjhvjhdb jNBdjhdve HAJ,gdbN KLJ WEjab jebnklvjwen akjeb klcv
                        avhcvecfuwheadbs wb eline laJHDNL OIWEFJOAifmo;ihwEIOAUGBEULWV
                        gvwdugyebO IDQPIguo hiojqWF wegDFUCB 92 HFQDgo 2fuoVYOD UI23GOD
                    </AboutDetails>
            </AllInfo>
        </Wrapper>
        <Footer/>
    </Container>

  );
};

export default TeacherProfile;

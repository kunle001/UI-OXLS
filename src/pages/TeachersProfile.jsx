import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcement';
import { CheckCircleOutline } from '@material-ui/icons';

const Container= styled.div``

const Wrapper= styled.div`
    height:1000px;
    padding:50px ;
    display:flex
`

const TeacherImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;

`;

const ActivePanel= styled.div`
    display:flex;
    height:100px;
    padding:8px 0px;
`;
const TeacherDesc= styled.div`
    padding:15px 0px 3px 20px;
`

const TeacherProfilePics= styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
`;
const Details= styled.div`
    display:flex;
    margin:2px;
    flex-direction:column;
`

const TeachersDetails= styled.div`
    flex:1;
    display:flex;
    width:600px;
    flex-direction: column;
`;

const TeachersName= styled.h3`
    font-weight:900;
    padding-left:20px;
`;

const Online= styled.div`
    justify-content:center;
    align-items:center;
    color:green;
    padding: 15px 0px 10px 100px;
`

const TeachersCountry= styled.div`
`;

const Bio= styled.span`
    font-weight:bold;
    font-size:15px;
    padding: 10px 5px;
`
const Subject= styled.p`
    padding: 10px 120px ;
`;

const Testimonials= styled.div`
    flex:2;
`;

const Reports= styled.div`
`;

const UserDetails= styled.h1`
`



const TeacherProfile = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <TeachersDetails>
                <TeacherImage src='https://www.worddive.com/blog/wp-content/uploads/2017/06/shutterstock_309241937.jpg'/>
                <ActivePanel>
                    <TeacherProfilePics src='https://www.worddive.com/blog/wp-content/uploads/2017/06/shutterstock_309241937.jpg'/>
                    <Details>
                        <TeachersName>ANALEASE</TeachersName>
                        <TeacherDesc>Professional Teacher</TeacherDesc>
                    </Details>
                    <Online>
                        <CheckCircleOutline/>
                    </Online>
                </ActivePanel>
                <TeachersCountry>
                </TeachersCountry>
                <Subject>English</Subject>
                <Bio>Highly Experienced with 7 years experience in Teaching</Bio>
            </TeachersDetails>
            <Testimonials>
                <Reports>
                    <UserDetails>
                        adeyemo alake
                    </UserDetails>
                </Reports>
            </Testimonials>
        </Wrapper>
        <Footer/>
    </Container>

  );
};

export default TeacherProfile;

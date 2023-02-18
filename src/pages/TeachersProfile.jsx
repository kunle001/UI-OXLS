import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcement';
import { CheckCircleOutline, HelpOutline, StarRounded } from '@material-ui/icons';
import { useState } from 'react';
import Reviews from '../components/Reviews';
import { mobile } from "../responsive"
import Calender from '../components/Calender';

const Container= styled.div`
`

const Wrapper= styled.div`
    padding:10px ;
    display:flex;
    background-color: #eee;
    ${mobile({flexDirection:"column"})}
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

const TeacherLevel= styled.span`
    font-family: 'Trebuchet MS';
    color: gray;
    font-size:12px;
    padding-left:20px;
`;

const Info= styled.div`
    display: flex;
    padding: 0px 6px 15px 80px;
    margin-top:0px;
`

const COmpletedClasses= styled.span`
    padding:5px 0px 3px 20px;
    font-style: italic;
    font-weight:300;
    
`;

const Trial= styled.h3`
    font-weight:900;
`

const TeacherProfilePics= styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
`;


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
    height:500px;
    flex-direction: column;
    border-radius:10px;
    background-color:white;
`;

const TeachersName= styled.h3`
    font-weight:900;
    padding-left:20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  margin-top:10px;
  height: 1px;
`

const Online= styled.div`
    justify-content:center;
    align-items:center;
    color:green;
    padding: 1px 10px 2px 0px;
`;

const Help= styled.div`
    
`

const AllInfo= styled.div`
    height:500px;
    padding:30px;
    margin-left:5px;
    background-color:white;
    border-radius:15px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width:0;
        height:0;
    }
`;



const AboutDetails= styled.p`
    height:100%;
    width: 100%;
    padding-top:4px;
`



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
    background-color:#eee;
    color:black;
    font-weight:bold;
    padding:10px;
    margin-bottom:8px;
    border-radius:5px;
    border:none;
    width:70%;
    margin-left:45px;
    margin-bottom:8px;
`;

const Title= styled.h3`
    padding:0px 10px 5px 6px;
    cursor:pointer;
    font-family: 'Calibri';
    color:brown;
`;

const FullDetails= styled.div`
    height: 100px;
`;

const BottomRight= styled.div`
    margin-top: 70px;
    border-radius:10px;

`;

const ReviewTop = styled.div`
    flex:1.2;
    height:500px;
    width: 300px;
    border-radius:10px;
    background-color:white;
    padding:20px 5px;
    margin-left:5px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width:0;
        height:0;
    }
`;

const ReviewRatings= styled.div`
    height:80px;
    margin-top: 15px;
    background-color:#eee;
    border-radius:10px;
    display:flex;
    justify-content: space-between;
`;

const Star= styled.div`
    display:flex;
    color:gold;
    padding: 12px 12px;
    width: 5rem;
    height: 5rem;
`;

const ReviewTitle= styled.div`
    font-weight:900;
    font-size:20px;
    padding-left:40%;
`

const RatingValue= styled.h1`
    font-size:24px;
`;

const ReviewsDesc= styled.div``;
const RDesc= styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:10px;
`;

const ReviewsWrapper= styled.div`
    margin-bottom:5px;
    width:100%;
`

const Students= styled.h1`
    padding: 12px 12px 15px 0px;
    font-weigth:900;
    font-size:24px;
`;

const Number= styled.b``



const AboutMeText= "Lorem Ipson ukvcweuh ueiDBAf EIe ef BEVB IIUEBIWIFWUI LFE FHIOALEN HE IFu fiUBe UHIFU Ew fiwIBF W:ioHFIUfBIUF IOHFgF IQHfoGUF[faBF hifiugf IOHFIYGFbfUIHF IHFIHFGfBVUBEF IFUe uiegfuiGeOHdfo gIUFGoeyFF FGUifgUF2gb2idgf uudfiugef ihefigebghuw wuihwd jhvkbquDBUDHWB O IUOYGQD8Og I    gig8weiojiogD phifogdwdkjo ddpei fogd iuguqwf u9gQYfOhv p28qyGOIUb h8oyGqPJ P9HDG9 89Y 8EY9 Y893pfgpo 89pgf ui23grrf roir rurr2iu ugr2i r22"

const SeeButton= styled.button`
    border: none;
    color:brown;
    background-color: transparent;
    cursor:pointer;
    padding-bottom:7px;
`;

const Schedule= styled.div`
    margin-top:10px;
    background-color:white;
    border-radius:10px
`

const ScheduleTxt= styled.div`
    margin-top:5px;
    margin-left:30%;
    color: lightgray;
    font-size:25px;
    font-weight:bold;
`;

const EntireAbout= styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const Name= styled.div``

const TeacherProfile = () => {
    const [isExpanded, setIsExpanded]= useState(false);

    const handleExpand= ()=>{
        setIsExpanded(!isExpanded)
    }
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
                            TRIAL LESSON
                        </Trial>
                        <b> USD 5.00 </b>
                        <Help>
                            <HelpOutline/>
                        </Help>
                    </Details>
                    <COmpletedClasses>50 classes completed</COmpletedClasses>
                </LeftPanel>
                <Hr/>
                <BookButton>Book A Class</BookButton>
                <ContactButton>Contact Teacher</ContactButton>
            </TeachersDetails>
            <EntireAbout>
                <AllInfo>
                    <FullDetails>
                        <ActivePanel>
                            <TeacherProfilePics src='https://www.worddive.com/blog/wp-content/uploads/2017/06/shutterstock_309241937.jpg'/>
                            <RightDetails>
                                <Name>
                                    <TeachersName>ANALEASE</TeachersName>
                                    <TeacherLevel>PROFESSIONAL TEACHER</TeacherLevel>
                                </Name>
                                <Online>
                                    <CheckCircleOutline/>
                                </Online>
                            </RightDetails>
                        </ActivePanel>
                        <Info>
                            <TeacherDesc>Teaches: Yoruba</TeacherDesc>
                            <TeacherDesc>Speaks: English</TeacherDesc>
                        </Info>
                    </FullDetails>
                        <BottomRight>
                            <Title>
                                About me
                            </Title>
                            <AboutDetails>
                            {isExpanded ? AboutMeText : AboutMeText.slice(0,200)}
                            </AboutDetails>
                            <SeeButton onClick={handleExpand}>
                            {isExpanded ? "Show Less" : "Show More"}
                            </SeeButton>
                            <Title>
                            Me as a Teacher
                            </Title>
                            <AboutDetails>
                            {isExpanded ? AboutMeText : AboutMeText.slice(0,200)}
                            </AboutDetails>
                            <SeeButton onClick={handleExpand}>
                            {isExpanded ? "Show Less" : "Show More"}
                            </SeeButton>
                            <Title>
                            Me and my Teaching Style
                            </Title>
                            <AboutDetails>
                            {isExpanded ? AboutMeText : AboutMeText.slice(0,200)}
                            </AboutDetails>
                            <SeeButton onClick={handleExpand}>
                            {isExpanded ? "Show Less" : "Show More"}
                            </SeeButton>
                        </BottomRight>
                </AllInfo>
                
                <Schedule>
                    <ScheduleTxt>MY SCHEDULE</ScheduleTxt>
                    <Hr/>
                    <Calender/>
                </Schedule>
            </EntireAbout>

            <ReviewTop>
                <ReviewTitle>REVIEWS (3)</ReviewTitle>
                <ReviewRatings>
                    <Star>
                        <StarRounded style={{ height: '30px', width: '30px' }}/>
                        <RatingValue>5.0</RatingValue>
                    </Star>
                    <Students>
                        <Number>150</Number>
                    </Students>
                    <Students>
                        <Number>1871</Number>
                    </Students>
                    <Students>
                        <Number>100%</Number>
                    </Students>
                    <Students>
                        <Number>100%</Number>
                    </Students>
                </ReviewRatings>
                <ReviewsDesc>
                    <RDesc>
                        <ReviewsWrapper>
                            <Reviews/>
                        </ReviewsWrapper>
                        <ReviewsWrapper>
                            <Reviews/>
                        </ReviewsWrapper>                        
                        <ReviewsWrapper>
                            <Reviews/>
                        </ReviewsWrapper>
                        <ReviewsWrapper>
                            <Reviews/>
                        </ReviewsWrapper>
                        <ReviewsWrapper>
                            <Reviews/>
                        </ReviewsWrapper>
                    </RDesc>
                </ReviewsDesc>
             </ReviewTop>

        </Wrapper>
        <Footer/>
    </Container>

  );
};

export default TeacherProfile;

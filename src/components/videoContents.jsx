import styled from "styled-components"

const Container= styled.div`
    padding:100px;
    height:500px;
`
const videoCont= styled.video`
    height:100%
`


const videoContents = () => {
  return (
    <Container>
      <h1>Video!!!!</h1>
      <videoCont src="https://youtu.be/OJ8QKM6Tt_Y"/>
    </Container>
  )
}

export default videoContents

import { useState } from "react";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather";
import UserInput from "./components/UserInput";


const Container = styled.section`
width:100%;
display:flex;
justify-content: center;
align-items: center;
`

const Main = styled.main`
width:60%;
display:flex;
flex-direction:column;
margin: 4rem 0;
`

function App() {
  const [input, setInput] = useState("London");
  return (
    <Container>
      <Main>
      <UserInput value={input} addInput={setInput} />
      <CurrentWeather city={input}/>
      
        </Main>

    </Container>
  );
}

export default App;

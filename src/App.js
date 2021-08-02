import { useState } from "react";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather";
import UserInput from "./components/UserInput";
import UserLocation from "./components/UserLocation";


const Container = styled.section`
width:100%;
display:flex;
justify-content: center;
align-items: center;
`

const Main = styled.main`
width:70%;
display:flex;
flex-direction:column;
margin: 4rem 0;
position:relative;

@media only screen and (max-width: 980px) {
  width:90%;

}
`

function App() {
  const [input, setInput] = useState("London");

  return (
    <Container>
      <Main>
        <UserLocation changeLocation={setInput} />
      <UserInput value={input} addInput={setInput} />
      <CurrentWeather  city={input}/>
      
        </Main>

    </Container>
  );
}

export default App;

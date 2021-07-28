import { useState } from "react";
import styled from "styled-components";
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
      <h1>{input}</h1>
        </Main>

    </Container>
  );
}

export default App;

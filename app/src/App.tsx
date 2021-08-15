import { Hero } from "./page/Hero";
import styled from "styled-components";

const App = () => {
  const StyleWrap = styled.div`
    font-family: "poppins", sans-serif;
    background-color: black;
    color: white;
  `;
  return (
    <StyleWrap>
      <Hero />
    </StyleWrap>
  );
};

export default App;

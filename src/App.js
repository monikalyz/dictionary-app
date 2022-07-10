import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import bodybg from "./images/bodybg.png";
import portrait from "./images/portrait.svg";
import pen from "./images/pen.png";
import check from "./images/check.png";
import mouse from "./images/mouse.png";
import firstPhoto from "./images/tlo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <AppWrapper>
      <GlobalResets />
      <Image />
      <QuickInfo>
        <Steps>
          <div>
            <img src={pen} alt="pen" />
            <h3>
              Zapisz słówka <br />i utwórz słownik
            </h3>
          </div>

          <div>
            <img src={check} alt="check" />
            <h3>Wybierz język losowanego słówka </h3>
          </div>

          <div>
            <img src={mouse} alt="mouse" />
            <h3>Naciśnij play, rozpocznij naukę</h3>
          </div>
        </Steps>
      </QuickInfo>
      <FirstStep>
        <FirstStepPhoto>
          <img src={firstPhoto} alt="firstPhoto"></img>
        </FirstStepPhoto>

        <FirstStepTxt>
          <h1>
            Ucz się angielskiego na własnych zasadach z aplikacją DICTIONARY
          </h1>
          <h2>Wykonaj kilka kroków i rozpocznij naukę!</h2>
        </FirstStepTxt>
      </FirstStep>
      <Dictionary />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: whitesmoke;
  background-image: url(${bodybg});
  background-size: contain;
  overflow-x: hidden;
`;

const GlobalResets = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
}`;

const Image = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${portrait});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const QuickInfo = styled.section`
  width: 100%;
  background-color: #140a03;
  color: white;
  padding: 10%;
`;

const Steps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  hyphens: auto;

  & > div {
    margin: 10%;
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  & > div > img {
    width: 55px;
    padding-bottom: 20px;
  }

  & > div > h3 {
    font-size: 20px;
    letter-spacing: 3px;
    padding: 0% 15%;
  }
`;

const FirstStep = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #d2cccc;
  height: 100vh;
  border-top: 5px solid whitesmoke;
`;

const FirstStepPhoto = styled.div`
  flex-basis: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    border: 5px solid white;
    width: 40vh;
  }
`;

const FirstStepTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;

  & > h1 {
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 10%;
  }

  & > h2 {
    font-size: 21px;
    font-weight: 300;
  }
`;

export default App;

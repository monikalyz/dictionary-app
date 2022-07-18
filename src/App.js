import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import bodybg from "./images/bodybg.png";
import portrait from "./images/portrait.svg";
import pen from "./images/pen.png";
import check from "./images/check.png";
import mouse from "./images/mouse.png";
import firstPhoto from "./images/tlo.png";
import Dictionary from "./Dictionary";
import bg from "./images/bg.png";

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

  @media (orientation: landscape) {
    background-image: url(${bg});
  }
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

  @media (orientation: landscape) {
    flex-direction: row;
  }

  & > div {
    margin: 10%;
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media (orientation: landscape) {
      margin: 0%;
    }
  }

  & > div > img {
    width: 55px;
    padding-bottom: 20px;

    @media (min-width: 700px) and (orientation: portrait) {
      width: 92px;
    }
  }

  & > div > h3 {
    font-size: 20px;
    letter-spacing: 3px;
    padding: 0% 15%;

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 42px;
    }
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

  @media (orientation: landscape) and (max-width: 1000px) {
    flex-direction: row;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    flex-direction: row;
    height: 70vh;
  }
`;

const FirstStepPhoto = styled.div`
  flex-basis: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    border: 5px solid white;
    width: 40vh;

    @media (min-width: 700px) and (orientation: portrait) {
      width: 50vh;
    }

    @media (orientation: landscape) and (max-width: 1000px) {
      width: 60vh;
      margin: 5vh;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      width: 60vh;
      margin: 30vh 5vh 0vh 10vh;
    }
  }
`;

const FirstStepTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;

  @media (min-width: 400px) and (min-height: 700px) and (orientation: portrait) {
    margin: 0 20%;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    margin: 0 5%;
  }

  & > h1 {
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 10%;

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 40px;
    }
    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 40px;
    }
  }

  & > h2 {
    font-size: 21px;
    font-weight: 300;

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 35px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 45px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 35px;
      align-self: flex-start;
    }
  }
`;

export default App;

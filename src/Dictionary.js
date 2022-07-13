import React, { Component } from "react";
import styled from "styled-components";
import plus from "./images/plus.png";
import flags from "./images/flags.png";
import start from "./images/start.png";
import checkAnswer from "./images/checkAnswer.png";

const Dict = (props) => (
  <ElementOfList>
    <span id={props.engWord}>{props.engWord}</span>
    <span id={props.plWord}>{props.plWord}</span>
    <Button className="remove" onClick={props.delete}>
      usuń
    </Button>
  </ElementOfList>
);

const ElementOfList = styled.li`
  list-style: none;
  font-size: 20px;
  display: flex;
  margin-bottom: 20px;
  margin-right: 20%;
  width: 80%;
  flex-wrap: wrap;

  & > span {
    margin-right: 50px;
    display: block;
    min-width: 150px;
    align-self: flex-end;
    hyphens: auto;
    font-weight: 300;
  }

  & > .remove {
    font-size: 20px;
    font-weight: 500;
  }
`;
class Dictionary extends Component {
  state = {
    engWord: "",
    plWord: "",
    userDictionary: [],
    isAdd: false,
    isItem: false,
    txt: "pokaż słownik",
    language: "eng",
    value: "",
  };

  handleWriteEnglishWord = (e) => {
    this.setState({
      engWord: e.target.value,
    });
  };

  handleWritePolishWord = (e) => {
    this.setState({
      plWord: e.target.value,
    });
  };

  handleAddWords = () => {
    const userDictionary = [...this.state.userDictionary];

    const { engWord, plWord, isAdd } = this.state;

    if (engWord && plWord !== userDictionary.length) {
      userDictionary.push({ engWord: `${engWord}`, plWord: `${plWord}` });

      this.setState({
        userDictionary,
        engWord: "",
        plWord: "",
        isAdd: !isAdd,
      });
    }
  };

  handleShowUserDict = () => {
    const userDictionary = [...this.state.userDictionary];

    const isItem = this.state.isItem;

    if (isItem) {
      this.setState({
        userDictionary,
        txt: "pokaż słownik",
        isItem: !isItem,
      });
    } else {
      this.setState({
        userDictionary,
        txt: "schowaj słownik",
        isItem: !isItem,
      });
    }
  };

  handleDelete(engWord) {
    const userDictionary = [...this.state.userDictionary];
    const index = userDictionary.findIndex((dict) => dict.engWord === engWord);
    userDictionary.splice(index, 1);

    this.setState({
      userDictionary,
    });
  }

  handleSelect = (e) => {
    this.setState({
      language: e.target.value,
      value: "",
    });
  };

  render() {
    const { engWord, plWord, txt, isItem, language } = this.state;
    const userDictionary = this.state.userDictionary.map((dict) => (
      <Dict
        key={dict.engWord}
        id={dict.engWord}
        engWord={dict.engWord}
        plWord={dict.plWord}
        delete={this.handleDelete.bind(this, engWord)}
      />
    ));
    return (
      <>
        <SecondStep>
          <h3>
            Wpisz słowa do nauki i dodaj je do swojego nowo utworzonego
            słownika.
          </h3>

          <label>
            <Input
              placeholder="angielskie słowo"
              type="text"
              value={engWord}
              onChange={this.handleWriteEnglishWord}
            />

            <Input
              placeholder="polskie słowo"
              type="text"
              value={plWord}
              onChange={this.handleWritePolishWord}
            />
          </label>

          <Button onClick={this.handleAddWords}>
            <img src={plus} alt="add-btn" />
          </Button>
        </SecondStep>

        <ThirdStep>
          <Button className="showHide" onClick={this.handleShowUserDict}>
            {txt}
          </Button>

          <ul>{isItem ? userDictionary : null}</ul>
        </ThirdStep>

        <FourthStep>
          <ChooseLang>
            <h3>Wybierz język losowanego słówka</h3>

            <label>
              <select value={language} onChange={this.handleSelect}>
                <option value="eng">angielski</option>
                <option value="pl">polski</option>
              </select>
            </label>
          </ChooseLang>

          <FourthStepPhoto>
            <img src={flags} alt="fourthSectionPhoto" />
          </FourthStepPhoto>
        </FourthStep>

        <FifthStep>
          <Start>
            <h3>Naciśnij PLAY i wylosuj słowo</h3>

            <LongerBtn>
              <img src={start} alt="draw-btn" />
            </LongerBtn>

            <DrawWord>wylosowane słówko</DrawWord>
          </Start>

          <Answer>
            <h3>
              Wpisz odpowiedź i sprawdź czy jest poprawna naciskając przycisk
            </h3>

            <InputAnswer placeholder="wpisz odpowiedź" type="text" />

            <Button className="checkBtn">
              <img src={checkAnswer} alt="check-btn"></img>
            </Button>

            <Message>odpowiedź</Message>
          </Answer>
        </FifthStep>

        <FinalInfo>
          Kiedy odpowiesz poprawnie, słówka zostaną usunięte ze słownika
        </FinalInfo>

        <Footer>
          Template developed by Monika Łyżwa © 2022 || icons by Icons8
        </Footer>
      </>
    );
  }
}

const SecondStep = styled.section`
  height: 100vh;
  background-color: #b48e85;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  border-top: 5px solid whitesmoke;

  & > h3 {
    font-size: 30px;
    display: block;
    flex-basis: 40%;
    font-weight: 300;
  }

  & > label {
    flex-basis: 30%;
  }
`;

const Input = styled.input`
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-color: transparent;
  padding: 10px;
  outline: none;
  background: linear-gradient(90deg, #140a03, #140a03) left bottom/100% 2px
    no-repeat;
  margin: 10px;
  font-size: 22px;
  font-weight: 400;
  text-align: center;

  &::placeholder {
    color: #140a03;
    font-size: 24px;
    font-weight: 300;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: black;
  cursor: pointer;

  & > img {
    background-color: transparent;
  }

  & > img:hover {
    border: black;
    border-radius: 50%;
    background-color: black;
    box-shadow: 5px 2.5px 25px #746a64;
  }
`;

const ThirdStep = styled.section`
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .showHide {
    font-size: 25px;
    text-align: right;
    padding-right: 5%;
    font-weight: 400;
    z-index: 1;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    justify-self: left;
    padding-top: 30px;
    padding-left: 10%;
  }
`;

const FourthStep = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #cdaaae;
`;

const ChooseLang = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;

  & > h3 {
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 20%;
  }

  & > label {
    padding: 10% 0;
  }

  & > label > select {
    width: 200px;
    height: 50px;
    font-size: 25px;
    font-weight: 300;
    border-radius: 5px;
    background-color: #ca989e;
    border-color: #fff;
  }

  & > label > select > option:hover {
    background-color: #504f4f;
  }
`;

const FourthStepPhoto = styled.div`
  flex-basis: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    border: 5px solid white;
    width: 40vh;
  }
`;

const FifthStep = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #b1bdc0;
  border-top: 5px solid whitesmoke;
`;

const Start = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;

  & > h3 {
    font-size: 30px;
    flex-basis: 20%;
    font-weight: 300;
    padding-top: 10%;
    text-align: center;
  }
`;

const LongerBtn = styled(Button)`
  align-self: center;
  flex-basis: 20%;
  padding-top: 10%;

  & > img:hover {
    border-radius: 50px;
  }
`;

const DrawWord = styled.div`
  font-size: 40px;
  flex-basis: 40%;
  align-self: center;
  font-weight: 300;
  padding: 20% 0;
  border-color: whitesmoke;
`;

const Answer = styled.div`
  flex-basis: 50%;
  text-align: right;
  padding-right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-size: 25px;
    margin-bottom: 5%;
    padding-left: 5%;
    font-weight: 300;
    text-align: center;
  }

  & > .checkBtn {
    flex-basis: 30%;
    padding-top: 5%;
  }
`;

const InputAnswer = styled(Input)`
  padding-left: 20px;
`;

const Message = styled.div`
  font-size: 30px;
  font-weight: 300;
  padding: 10% 0;
`;

const FinalInfo = styled.h4`
  font-size: 20px;
  background-color: whitesmoke;
  font-weight: 400;
  padding: 10px 100px 10px 10px;
  display: flex;
  justify-content: right;
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #140a03;
  text-align: center;
  padding: 20px 5px;
`;

export default Dictionary;

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

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 35px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    font-size: 50px;
  }

  & > span {
    margin-right: 50px;
    display: block;
    min-width: 150px;
    align-self: flex-end;
    hyphens: auto;
    font-weight: 300;

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 30px;
    }

    @media (orientation: landscape) and (min-height: 820px) {
      font-size: 35px;
    }
  }

  & > .remove {
    font-size: 20px;
    font-weight: 500;

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 35px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 30px;
    }

    @media (orientation: landscape) and (min-height: 800px) {
      font-size: 35px;
    }
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
    wordENG: "",
    wordPL: "",
    answer: "",
  };

  handleWriteEnglishWord = (e) => {
    this.setState({
      engWord: e.target.value,
    });
  };

  handleClickedInput = () => {
    this.setState({
      answer: "",
      wordENG: "",
      wordPL: "",
      value: "",
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
      value: "",
      answer: "",
      wordENG: "",
      wordPL: "",
    });
  }

  handleSelect = (e) => {
    this.setState({
      language: e.target.value,
      value: "",
      answer: "",
      wordENG: "",
      wordPL: "",
    });
  };

  handleDrawWord = () => {
    const userDictionary = [...this.state.userDictionary];
    const isItem = this.state.isItem;
    const index = Math.floor(Math.random() * userDictionary.length);

    if (!isItem) {
      this.setState({
        wordENG: userDictionary[index].engWord,
        wordPL: userDictionary[index].plWord,
      });
    } else {
      alert("ukryj słownik");
    }

    this.setState({
      value: "",
      answer: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCheckWord = () => {
    const { language, value, wordENG, wordPL } = this.state;
    const userDictionary = [...this.state.userDictionary];
    const indexENG = userDictionary.findIndex((dict) => dict.engWord === value);
    const indexPL = userDictionary.findIndex((dict) => dict.plWord === value);

    if (value === "") return;
    else if (language === "eng") {
      if (value === wordPL) {
        userDictionary.splice(indexPL, 1);

        this.setState({
          value: wordPL,
          userDictionary,
          answer: "dobrze!",
        });
      } else {
        this.setState({
          answer: "spróbuj jeszcze raz",
        });
      }
    } else {
      if (value === wordENG) {
        userDictionary.splice(indexENG, 1);

        this.setState({
          value: wordENG,
          userDictionary,
          answer: "dobrze!",
        });
      } else {
        this.setState({
          answer: "spróbuj jeszcze raz",
        });
      }
    }
  };

  render() {
    const {
      engWord,
      plWord,
      txt,
      isItem,
      language,
      wordENG,
      wordPL,
      value,
      answer,
    } = this.state;
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
              onClick={this.handleClickedInput}
            />

            <Input
              placeholder="polskie słowo"
              type="text"
              value={plWord}
              onChange={this.handleWritePolishWord}
              onClick={this.handleClickedInput}
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

            <LongerBtn onClick={this.handleDrawWord}>
              <img src={start} alt="draw-btn" />
            </LongerBtn>

            <DrawWord>{language === "eng" ? wordENG : wordPL}</DrawWord>
          </Start>

          <Answer>
            <h3>
              Wpisz odpowiedź i sprawdź czy jest poprawna naciskając przycisk
            </h3>

            <InputAnswer
              placeholder="wpisz odpowiedź"
              type="text"
              value={value}
              onChange={this.handleChange}
            />

            <Button className="checkBtn" onClick={this.handleCheckWord}>
              <img src={checkAnswer} alt="check-btn"></img>
            </Button>

            <Message>{answer}</Message>
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

  @media (orientation: landscape) and (max-width: 1000px) {
    flex-direction: row;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    flex-direction: row;
    height: 80vh;
  }

  & > h3 {
    font-size: 30px;
    display: block;
    flex-basis: 40%;
    font-weight: 300;

    @media (min-width: 500px) and (min-height: 700px) and (orientation: portrait) {
      margin: 0 15%;
    }

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 40px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      margin-top: 10vh;
      font-size: 35px;
    }
  }

  & > label {
    flex-basis: 30%;

    @media (orientation: landscape) {
      margin: 5%;
    }
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

  @media (min-width: 400px) and (min-height: 700px) and (orientation: portrait) {
    font-size: 26px;
  }

  @media (min-width: 500px) and (min-height: 700px) and (orientation: portrait) {
    margin: 0 15%;
  }

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 35px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    font-size: 50px;
    margin: 0 10%;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    font-size: 35px;
  }

  &::placeholder {
    color: #140a03;
    font-size: 24px;
    font-weight: 300;

    @media (min-width: 400px) and (min-height: 700px) and (orientation: portrait) {
      font-size: 26px;
    }

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 35px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 40px;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: black;
  cursor: pointer;

  & > img {
    background-color: transparent;

    @media (min-width: 700px) and (orientation: portrait) {
      width: 100px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      width: 150px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      width: 100px;
    }
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

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 35px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 35px;
    }
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

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    height: 70vh;
  }
`;

const ChooseLang = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;

  @media (orientation: landscape) and (min-width: 1001px) {
    align-items: flex-start;
  }

  & > h3 {
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 20%;

    @media (min-width: 400px) and (min-height: 700px) and (orientation: portrait) {
      font-size: 26px;
      margin: 0 10%;
    }

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 40px;
      margin: 0 20%;
      padding-bottom: 10%;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
      margin: 0 10%;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 40px;
    }
  }

  & > label {
    padding: 10% 0;

    @media (min-width: 400px) and (min-height: 700px) and (orientation: portrait) {
      padding: 0%;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      padding: 0%;
    }
  }

  & > label > select {
    width: 200px;
    height: 50px;
    font-size: 25px;
    font-weight: 300;
    border-radius: 5px;
    background-color: #ca989e;
    border-color: #fff;

    @media (min-width: 700px) and (orientation: portrait) {
      width: 250px;
      height: 65px;
      font-size: 40px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
      width: 350px;
      height: 70px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      font-size: 30px;
      width: 250px;
      height: 50px;
    }

    @media (orientation: landscape) and (min-height: 800px) {
      font-size: 40px;
      width: 300px;
      height: 60px;
    }
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

    @media (min-width: 700px) and (orientation: portrait) {
      width: 50vh;
    }

    @media (orientation: landscape) and (max-width: 1000px) {
      width: 60vh;
      margin: 5vh;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      width: 60vh;
      margin: 30vh 10vh 5vh 5vh;
    }

    @media (orientation: landscape) and (min-height: 750px) {
      width: 50vh;
      margin: 30vh 10vh 5vh 5vh;
    }
  }
`;

const FifthStep = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #b1bdc0;
  border-top: 5px solid whitesmoke;

  @media (orientation: landscape) and (min-width: 1001px) {
    flex-direction: row;
  }
`;

const Start = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;

  @media (orientation: landscape) and (min-width: 1001px) {
    align-self: flex-start;
    height: 100vh;
    border-right: 2px white solid;
  }

  & > h3 {
    font-size: 30px;
    flex-basis: 20%;
    font-weight: 300;
    padding-top: 10%;
    text-align: center;

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 40px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      justify-self: flex-end;
    }

    @media (orientation: landscape) and (min-height: 800px) {
      font-size: 40px;
    }
  }
`;

const LongerBtn = styled(Button)`
  align-self: center;
  flex-basis: 20%;
  padding-top: 10%;

  & > img {
    @media (min-width: 700px) and (orientation: portrait) {
      width: 250px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      width: 300px;
    }

    @media (orientation: landscape) and (min-width: 1001px) {
      width: 250px;
    }
  }

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

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 70px;
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    padding: 10% 0;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    padding: 20% 0;
  }
`;

const Answer = styled.div`
  flex-basis: 50%;
  text-align: right;
  padding-right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) and (min-height: 700px) and (orientation: portrait) {
    align-items: center;
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    width: 50%;
    transform: translateX(50%);
    padding-right: 0%;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    margin-top: 30vh;
  }

  & > h3 {
    font-size: 25px;
    margin-bottom: 5%;
    padding-left: 5%;
    font-weight: 300;
    text-align: center;

    @media (min-width: 700px) and (orientation: portrait) {
      font-size: 40px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      font-size: 50px;
      padding-bottom: 50px;
    }

    @media (orientation: landscape) and (min-height: 800px) {
      font-size: 30px;
      padding-bottom: 50px;
    }
  }

  & > .checkBtn {
    flex-basis: 30%;
    padding-top: 5%;

    @media (min-width: 500px) and (min-height: 700px) and (orientation: portrait) {
      padding-top: 10%;
    }
  }
`;

const InputAnswer = styled(Input)`
  padding-left: 20px;

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 40px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    font-size: 50px;
  }
`;

const Message = styled.div`
  font-size: 30px;
  font-weight: 300;
  padding: 10% 0;

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 40px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    font-size: 50px;
  }

  @media (orientation: landscape) and (min-height: 800px) {
    font-size: 35px;
  }
`;

const FinalInfo = styled.h4`
  font-size: 20px;
  background-color: whitesmoke;
  font-weight: 400;
  padding: 10px 100px 10px 10px;
  display: flex;
  justify-content: right;

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 40px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    font-size: 50px;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    padding: 20px;
    justify-content: left;
    font-size: 25px;
  }
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #140a03;
  text-align: center;
  padding: 20px 5px;

  @media (min-width: 700px) and (orientation: portrait) {
    font-size: 20px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    font-size: 30px;
    padding: 20px;
  }

  @media (orientation: landscape) and (min-width: 1001px) {
    padding: 20px;
    font-size: 20px;
  }
`;

export default Dictionary;

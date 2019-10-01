import React from "react";
import logo from "../../Assets/logos/logo.PNG";
import { AuthUserContext } from "../Session";
import withAuthentication from "../Session";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

var INITIAL_STATE = { linesOfButtons: Array(34).fill(null) };

for (var i = 0; i < INITIAL_STATE["linesOfButtons"].length; i++)
  INITIAL_STATE["linesOfButtons"][i] = "";

class Diagnosis extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = (questionNum, event) => {
    var linesOfButtons = this.state.linesOfButtons.slice();
    linesOfButtons[questionNum] = event.target.value;

    this.props.firebase.user(this.props.user.uid).set({
      linesOfButtons: linesOfButtons
    });

    this.setState({
      linesOfButtons: linesOfButtons
    });
  };

  lineOfButtons(questionNum, inputStyle) {
    var arr = [];

    for (var i = 1; i <= 5; i++) {
      arr.push(
        <input
          type="radio"
          style={inputStyle}
          name={questionNum}
          value={i}
          checked={this.state.linesOfButtons[questionNum] == i}
          onChange={event =>
            this.handleChange(questionNum, event, this.props.user)
          }
        ></input>
      );
    }

    return arr;
  }

  componentDidMount() {
    this.props.firebase.db
      .ref("/users/" + this.props.user.uid + "/linesOfButtons")
      .once("value", snapshot => {
        if (snapshot.val() !== null)
          INITIAL_STATE.linesOfButtons = snapshot.val();

        this.setState({ ...INITIAL_STATE });
      });
  }

  createListOfQuestions(question) {
    var arr = [];

    const inputStyle = {
      float: "right"
    };

    for (var i = 0; i < question.length; i++)
      arr.push(
        <div className={"Question " + String(i + 1)}>
          <p>{question[i]}</p>
          {this.lineOfButtons(i, inputStyle)}
        </div>
      );

    return arr;
  }

  render() {
    const questions = `I felt that my worry was out of control.
I felt restless, agitated, frantic or tense.
I have had trouble sleeping.
My heart would skip beat, was pounding, or my heart rate increased.
I was sweating profusely.
My hands, legs or entire body were shaking, trembling, or felt tingly.
I had difficulty breathing or swallowing
I had pain in my chest, almost like I was having a heart attack.
I felt sick to my stomach, like I was going to throw up, or had diarrhea.
I felt dizzy, my head was spinning, or felt like I was going to faint. 
I had cold or hold flashes.
I was scared that I would lose control, go crazy, or die. 
How frequently did you experience panic attacks in the last 6 months?
How often have you purposely avoided situations or activities in which you might experience a panic attack?
Have you been in the last 6 months haunted by memories, flashbacks, or nightmares about the event.
How often are you expecting the worst of others and of situations?
How often have you felt fear, guilt, shame, or blamed myself or others for what happened?
How often have you feel like you don't have interest in activities that you used to enjoy?
How often are you irritable or enraged because of minor issues(or for no reason at all)?
How often have you become reckless or took unnecessary risks?
How often are you excessively vigilant, tense or ""on guard"" or jumpy?
How often have you had trouble focusing, concentrating, or remembering things?
How often are you purposely avoided anything that reminded me of the event?
How often are you unable to feel happiness, contentment, joy, or love, or had trouble connecting with people?
How often are you frequently feeling sad like you can't go on?
How often have you felt you have stopped doing fun things that you used to enjoy?
How often have you noticed that you have lost or gained weight without trying to, or your appetite has changed?
How often have you felt slowed down compared to your usually pace?
How often have you felt exhausted?
How often are you feeling worthless or guilty?
How often are you thinking about death or taking my own life?
How often have you felt sadness have made it difficult for you to function in your personal, social, or work life?
How often have you experienced an unusually elevated mood where I was extremely elevated energetic or irritable?
How often have you had a sudden burst of confidence or felt like you are better than anyone else?`;

    var question = questions.split(/\r?\n/);
    var arr = [];

    return (
      <AuthUserContext.Consumer>
        {authUserObj => (
          <div className="wholeform">
            <form>
              <div>
                <div className="two">
                  <div className="header">
                    <h4 className="title-testdiagnosis">
                      Mental Illness Diagnosis Test
                    </h4>
                  </div>
                  <div className="together">
                    <label className="Name"></label>
                    <div className="wordname">Name</div>
                    <input
                      className="textname"
                      type="text"
                      name="name"
                      placeholder="name goes here"
                    />
                  </div>
                </div>
                <div className="questions">
                  <div className="wordscontainer">
                    <p className="words words1">Never</p>
                    <br />
                    <p className="words words2">Few Times</p>
                    <br />
                    <p className="words words3">Couple times</p>
                    <br />
                    <p className="words words4">Sometimes</p>
                    <br />
                    <p className="words words5">Always</p>
                  </div>
                  {arr}
                </div>
              </div>
            </form>
            {/*this.setAuthUserObj(authUserObj)*/}
            {this.createListOfQuestions(question)}

            <button className="diagnosis-submitbutton">
              <Link to={ROUTES.SUBMITTD}>Submit</Link>
            </button>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withAuthentication(Diagnosis);

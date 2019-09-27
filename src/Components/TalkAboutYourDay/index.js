import React from 'react';
import {AuthUserContext} from '../Session'
import withAuthentication from '../Session'

var INITIAL_STATE = {rangeSlider: "5", whatAreYouDoing: "", question4: ""};

var feelings = ['Sadness', 'Fear', 'Anger', 'Joy', 'Guilt', 'Shame']
var resources = ['Self-Harm crisis', 'Just need to talk', 'Need help?', 'Suicide hotline']

feelings.forEach(function(feeling) {INITIAL_STATE[feeling] = false})
resources.forEach(function(resources) {INITIAL_STATE[resources]= false})

class TalkAboutYourDay extends React.Component {
  constructor(props){
    super(props)
      this.state = {...INITIAL_STATE}
    }

    handleSliderChange (e) {

      var obj = this.state
      this.setState({[e.target.name]: e.target.value})
      this.props.firebase.user(this.props.user.uid).set({
        ...obj,
    })
    }

    handleCheckboxChange (e) {
      var obj = this.state
      this.setState({[e.target.name]: e.target.checked})
      this.props.firebase.user(this.props.user.uid).set({
        ...obj,})
    }

    handleRadioButtonAndTextBoxChange (e) {
      var obj = this.state
      this.props.firebase.user(this.props.user.uid).set({
          ...obj})
      this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount () {
      this.props.firebase.db.ref('/users/' + this.props.user.uid + '/talkaboutday').once('value', snapshot => {
        if (snapshot.val() !== null)
            INITIAL_STATE = snapshot.val();

        this.setState({...INITIAL_STATE})})
        console.log('authUser', this.props.user.uid)
    }

    /*componentWillUnmount () {
      var rangeSlider = this.state.rangeSlider
        
        this.props.firebase.user(this.props.user.uid).set({
            rangeSlider: rangeSlider,
        })
    }*/

  render () {

    var feelingsCheckboxes = feelings.map(feeling => {
    
      return(<div>
        <input type="checkbox" name={feeling} checked = {this.state.feeling}
        onChange={(e) => this.handleCheckboxChange(e)}></input> {feeling}<br></br>
      </div>)
    }
    )
    
    var resourcesCheckboxes = resources.map(resource => {
    
      return(<div>
        <input type="checkbox" name={resource} checked = {this.state.resource}
        onChange={(e) => this.handleCheckboxChange(e)}></input> {resource}<br></br>
      </div>)
    }
    )   

  return (<div>
  <div>
    <div>How has life been treating you Today (On a scale of 1-10)?</div>
    </div>

    <div className="slidecontainer">
      <input type="range" min="1" max="10" 
        defaultValue="5"
        value = {this.state.rangeSlider}
        onChange={(e) => this.handleSliderChange(e)} 
        name = "rangeSlider" className="rangeSlider" id="myRange"></input>
        {this.state.rangeSlider}
    </div>

    <div>What are you doing right now?</div>
      <input type="text" value = {this.state.whatAreYouDoing} name = "whatAreYouDoing" 
      onChange = {(e) => {this.handleRadioButtonAndTextBoxChange(e)}}></input>

    <div>What sort of feelings are you feeling?</div>
    {feelingsCheckboxes}

    <div>Did something happen to increase or decrease that emotion</div>
      <input type="radio" name="question4" value="yes" checked = {this.state.question4 == "yes"}
        onChange={(e) => this.handleRadioButtonAndTextBoxChange(e)}></input> Yes<br></br>
      <input type="radio" name="question4" value="no" checked = {this.state.question4 == "no"}
        onChange={(e) => this.handleRadioButtonAndTextBoxChange(e)}
      ></input> No<br></br>

    <div>Do you need anything from me resource wise?</div>
      {resourcesCheckboxes}
  </div>);
  }
}

export default withAuthentication(TalkAboutYourDay);
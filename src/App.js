import { Component } from "react";
import Statisticks from "./Components/Statisticks";
import styled from "styled-components";
import Section from "./Components/Section";
import Notification from "./Components/Notification";
import FeedbackOptions from "./Components/FeedbackOptions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: gray;
`;

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const positive =  this.state.good / this.countTotal() * 100;
    return positive.toFixed(1);
  }

  addFeedback = (feedback) => {

    const {good, neutral, bad} = this.state;

    if(feedback === 'good'){
      this.setState({ good: good + 1  })
    }else if(feedback === 'neutral'){
      this.setState({ neutral: neutral + 1 })
    }else if(feedback === 'bad'){
      this.setState({ bad: bad + 1 })
    }
  }

  render(){
    const { good, neutral, bad} = this.state;

    return(
      <Container>
        <Section title='Title'>
          {this.countTotal() > 0 && (
            <Statisticks good={good} bad={bad} neutral={neutral} total={this.countTotal()} positive={this.countPositiveFeedbackPercentage()} />
          )}
          {this.countTotal() === 0 && (
            <Notification notification={'There is no feedback'} />
          )}
          <FeedbackOptions addFeedback={this.addFeedback} />
        </Section>
      </Container>
    )
  }
}
import React, { Component } from 'react';
import './App.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

  TotalCounter = () => {
      return this.state.good + this.state.neutral + this.state.bad;
  }

  PositivePercentage = () => {
      if (this.state.good === 0) {
          return 0;
      }
      return Math.round((this.state.good / this.TotalCounter()) * 100);
  }

  btnClick = (evt) => {
    if (evt.target.textContent === 'Bad') {
      return (
        this.setState(prevState => ({ bad: prevState.bad + 1 }))
      )
    } if (evt.target.textContent === 'Neutral') {
      return (
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
      )
    } if (evt.target.textContent === 'Good') {
      return (
        this.setState(prevState => ({ good: prevState.good + 1 }))
      )
    } 
  }

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Bad','Neutral','Good']} onLeaveFeedback={this.btnClick}/>
        </Section>
        <Section title="Statistics">
          {this.TotalCounter() === 0 ?
            <Notification message="No feedback given" /> :
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.TotalCounter()}
            positivePercentage={this.PositivePercentage()}
            />
          }
        </Section>
      </div>
    )
  };
}

export default App;

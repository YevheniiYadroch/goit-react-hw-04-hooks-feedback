import React, { useState } from 'react';
import './App.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const TotalCounter = () => {
      return good + neutral + bad;
  }

  const PositivePercentage = () => {
      if (good === 0) {
          return 0;
      }
      return Math.round((good / TotalCounter()) * 100);
  }

  const btnClick = (evt) => {
    if (evt.target.textContent === 'Bad') {
      return (
        setBad(prevState => prevState + 1)
      )
    } if (evt.target.textContent === 'Neutral') {
      return (
        setNeutral(prevState => prevState + 1)
      )
    } if (evt.target.textContent === 'Good') {
      return (
        setGood(prevState => prevState + 1)
      )
    } 
  }

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Bad','Neutral','Good']} onLeaveFeedback={btnClick}/>
        </Section>
        <Section title="Statistics">
          {TotalCounter() === 0 ?
            <Notification message="No feedback given" /> :
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalCounter()}
            positivePercentage={PositivePercentage()}
            />
          }
        </Section>
      </div>
    )
  
}

export default App;

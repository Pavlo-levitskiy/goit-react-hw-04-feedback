import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import  Statistics  from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


export const App = () => {
  const options = ['good', 'neutral', 'bad'];
  const [good , setGood] = useState(0);
  const [neutral , setNeutral] = useState(0);
  const [bad , setBad] = useState(0);
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const setFeedback = (event) => {
    const name = event;

    switch (name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) + "%";
  }
  let totalfeedbacks = countTotalFeedback();

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} onBtnClick={setFeedback} />
        </Section>
        <Section title="Statistics">
        {totalfeedbacks > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalfeedbacks}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback here" />
        )}
        </Section>
      </div>
    );
  }
  export default App;
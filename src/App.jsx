import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      });
    } else {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options onFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <>
          <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} totalFeedback={totalFeedback} positiveFeedback={positiveFeedbackPercentage} />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}


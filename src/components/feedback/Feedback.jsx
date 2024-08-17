import { useState } from 'react';
import css from "./Feedback.module.css"

export default function Feedback({ good, neutral, bad, totalFeedback }) {
    const positiveFeedback = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    return (
            <div className={css.feedbackcontainer}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total Feedback: {good + neutral + bad}</p>
                <p>Positive Feedback: {positiveFeedback}%</p>
            </div>
        );
    }

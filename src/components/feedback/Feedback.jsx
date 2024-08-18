import css from "./Feedback.module.css"

export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return (
            <div className={css.feedbackcontainer}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total Feedback: {totalFeedback}</p>
                <p>Positive Feedback: {positiveFeedback}%</p>
            </div>
        );
    }

import { useState } from 'react';
import css from "./Feedback.module.css"

export default function Feedback() {
    return (
        <div className={css.feedbackcontainer}>
            <p>Good: </p>
            <p>Neutral: </p>
            <p>Bad: </p>
        </div>
    );
}
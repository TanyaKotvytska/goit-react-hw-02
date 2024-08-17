import css from "./Notification.module.css";

export default function Notification() {
    return (
        <div className={css.notification}>
            <p>No feedback given yet.</p>
        </div>
    );
}
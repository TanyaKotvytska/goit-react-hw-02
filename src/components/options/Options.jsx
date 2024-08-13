import css from "./Options.module.css"

export default function Options() {
    return (
        <div className={css.btnconntainer}>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <button>Reset</button>
        </div>
    );
}
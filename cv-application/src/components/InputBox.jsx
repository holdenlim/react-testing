import "../styles/Box.css"

export default function InputBox({ label, setter, keything = null }) {
    return(
        <div>
            <label htmlFor={label}>{label}: </label>
            <input name={label} type="text" onChange={(e) => setter(e.target.value, keything)} />
        </div>
    )
}
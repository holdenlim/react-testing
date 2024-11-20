import "../styles/Box.css"

export default function DisplayBox({ label, value }) {
    return(
        <div>
            {label ? label + ": " : ""} {value ? value : "none"}
        </div>
    )
}
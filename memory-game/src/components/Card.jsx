import "../styles/Card.css"

export default function Card( { name, imageURL, clicked} ) {
    return (
        <div className="card" onClick={clicked}>
            {name}
            <img src={imageURL ? imageURL : ""} />
        </div>
    );
}
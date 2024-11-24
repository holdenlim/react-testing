import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const allcards = [
    {name:"Barack Obama", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg"},
    {name:"Peter Griffin", image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png"},
    {name:"Steve", image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Steve_%28Minecraft%29.png/220px-Steve_%28Minecraft%29.png"},
    {name:"Arthur", image:"https://upload.wikimedia.org/wikipedia/en/6/65/Arthur_Read.svg"},
    {name:"Jonesy", image:"https://static.wikia.nocookie.net/fortnite/images/0/0a/Jonesy_The_First_-_Outfit_-_Fortnite.png"},
    {name:"John Pork", image:"https://cdn.prod.website-files.com/5d7e8885cad5174a2fcb98d7/64933f98a477f02e36a282d1_5eddd950e5cf1ec1fa5c2d83_virtual-influencer-john-pork.jpeg"},
    {name:"Spongebob", image:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/da/c9/51/dac9513d-8123-2411-fe7f-f415890cab3e/artwork.jpg/600x600bf-60.jpg"},
    {name:"Chris Pratt", image:"https://m.media-amazon.com/images/M/MV5BY2I4MGI5ZmItZWNlNy00ZTZkLWJhMTgtMDhmYTRmNzUwNTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
    {name:"Jack Black", image:"https://m.media-amazon.com/images/M/MV5BNjY3OTQwMDctY2M2Ni00OGE2LThiNjMtYjg0MDg3YjVjN2FiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
    {name:"mike", image:"https://i.ytimg.com/vi/bvN927Ies_A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGD4gUShyMA8=&rs=AOn4CLAcaB2TizceJC4C79h9fpZrRaTI_Q"},
    {name:"Mike Wazowski", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OSZ-uP5Q4DUqGqBi3Sup7W3db1n40d5MoQ&s"},
    {name:"Morgan Freeman", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"},
  ];
  
  const [cards, setCards] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [alreadyPressed, setAlreadyPressed] = useState([]);

  useEffect(() => {
    setCards([]);
    for (let card of allcards) {
      setCards((c) => {
        return [...c, {name:card.name, imageURL:card.image, key:crypto.randomUUID()}];
      });
    };
    randomizeCards(setCards);
  }, []);

  return (
    <>
      Score: {score}
      <br />
      High Score: {highScore}
      <div className="container">
        {cards.map((card) => {
          return <Card name={card.name} imageURL={card.imageURL} key={card.key} clicked={() => {
            if (alreadyPressed.includes(card.name)) {
              setScore(0);
              setAlreadyPressed([]);
            }
            else {
              if (score + 1 > highScore) {
                setHighScore(score + 1);
              }
              setScore(s => s + 1);
            }
            setAlreadyPressed(arr => [...arr, card.name]);
            randomizeCards(setCards);
            // If already pressed: Set score 0, reset already pressed
            // If not: Add to already pressed, add 1 to score, check if high score
            // Regardless, add this card to already pressed and shuffle
          }} />
        })}
      </div>
    </>
  );
}

function randomizeCards(cardsetter) {
  cardsetter((bruh) => {
    let cards = [...bruh];
    for (let i = cards.length - 1; i >= 0; i--) {
      let randomCard = Math.floor(Math.random() * (i + 1))
      let temp = cards[i];
      cards[i] = cards[randomCard];
      cards[randomCard] = temp;
    }
    return cards;
  })
}

export default App

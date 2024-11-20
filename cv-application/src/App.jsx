import { useState } from 'react'
import Section from './components/Section.jsx'
import InputBox from "./components/InputBox.jsx"
import DisplayBox from "./components/DisplayBox.jsx"
import './App.css'

function App() {
  const [theName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [places, setPlaces] = useState([{value:"", key:crypto.randomUUID()}]);

  function addPlace(value, key = null) {
    if (key != null) {
      setPlaces(places.map((item) => {
        return item.key == key ? {...item, value:value} : item
      }))
    }
    else {
      setPlaces([...places, {value:value, key:crypto.randomUUID()}])
    }
  }

  return (
    <>
      <div id="columns">
        <div id="inputs">
          <Section heading="Personal Info">
            <InputBox setter={setName} label="Name" />
            <InputBox setter={setEmail} label="Email" />
            <InputBox setter={setPhone} label="Phone number" />
          </Section>
          <Section heading="Experience">
          <button onClick={() => addPlace("")}>Add Experience</button>
          <button onClick={() => {
            setPlaces(thing => thing.slice(0, thing.length - 1))
          }}>Remove Experience</button>
          {places.map((item, index) => {
              return <InputBox setter={addPlace} label={"Experience " + (index + 1)} key={item.key} keything={item.key} />
            })}
          </Section>
        </div>
        <div className="verticalLine"></div>
        <div id="preview">
          <Section heading="Personal Info">
            <DisplayBox label="Name" value={theName} />
            <DisplayBox label="Email" value={email} />
            <DisplayBox label="Phone number" value={phone} />
          </Section>
          <Section heading="Experience">
            {places.map((item) => {
              return <DisplayBox value={item.value} key={item.key} />
            })}
          </Section>
        </div>
      </div>
    </>
  )
}

export default App

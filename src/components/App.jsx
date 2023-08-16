import React, {useState} from 'react'

const App = () => {

const now = new Date().toLocaleTimeString();

let [time, setTime] = useState(now);

let UpdateTime=() => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
}

setInterval(UpdateTime,1000)

  return (
    <div className='frame'>
    <h1>Digital clock</h1>
    <br/><br/>
    <h3>{time}</h3>
    </div>
  )
}

export default App
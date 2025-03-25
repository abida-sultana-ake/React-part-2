import { useState } from "react"

export default function Batsman () {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const handleSingle = () => {
        setRuns(runs + 1);
    }
    const handleFour = () => {
        setRuns(runs + 4);
        setFours(fours + 1);
    }
    const handleSix = () => {
        setRuns(runs + 6);
        setSixes(sixes + 1);
    }

    const batsmanStyle = {
        border: '2px solid #0C0950'
    }
    return(
        <div style={batsmanStyle}>
            <h3>Player: Batsman </h3>
            <p>Sixes: {sixes}</p>
            <p>Fours: {fours}</p>
            {
                runs >= 50 && <p>Your Score: 50</p>
            }
            {
                runs >= 100 && <p>Your Score: 100</p>
            }
            <h2>Score: {runs} </h2>
            <button onClick={handleSingle} >Single</button>
            <button onClick={handleFour} >Four</button>
            <button onClick={handleSix} >Six</button>
        </div>
    )
}
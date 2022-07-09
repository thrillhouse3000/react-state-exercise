import {useState} from "react"
import './EightBall.css'

const EightBall = ({answers}) => {
    const initial = {msg: 'Think of a question', color: 'black'}
    const [msg, setMsg] = useState(initial.msg)
    const [color, setColor] = useState(initial.color)
    const [redCount, setRedCount] = useState(0)
    const [yellowCount, setYellowCount] = useState(0)
    const [greenCount, setGreenCount] = useState(0)
    const ballClick = () => {
        let answer = answers[Math.floor(Math.random() * answers.length)]
        setMsg(answer.msg)
        setColor(answer.color)
        if (answer.color === 'red') setRedCount(redCount + 1)
        if (answer.color === 'goldenrod') setYellowCount(yellowCount + 1)
        if (answer.color === 'green') setGreenCount(greenCount + 1)
        
    }
    const reset = () => {
        setMsg(initial.msg)
        setColor(initial.color)
        setRedCount(0)
        setYellowCount(0)
        setGreenCount(0)
    }
    return (
        <div className='EightBall'>
            <div className='EightBall-ball' style={{backgroundColor: color}} onClick={ballClick}>
                <p className='EightBall-text'>{msg}</p>
            </div>
            <button className='EightBall-reset' onClick={reset}>Reset</button>
            <div className='EightBall-colorCount'>
                <span style={{color: 'red'}}>Red: {redCount}</span> 
                <span style={{color: 'goldenrod'}}>Yellow: {yellowCount}</span> 
                <span style={{color: 'green'}}>Green: {greenCount}</span> 
            </div>
        </div>
    )
}

export default EightBall;
import { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [ remaingTime, setRemaingTime ] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [onTimeout, timeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaingTime(prevTime => prevTime - 100)
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return <progress id="question-time" max={timeout} value={remaingTime} className={mode}/>
}
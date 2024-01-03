import { useCallback, useState } from 'react'
import Question from './Question'

import questions  from '../question'
import Summary from './Summary'

export default function Quiz() {
    const [ userAnswers, setUserAnswers ] = useState([])
    const activeQuestionIndex = userAnswers.length 

    const isQuizOver = activeQuestionIndex === questions.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswers => (
            [...prevAnswers, selectedAnswer]
        ))
    }, [])

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer])

    if(isQuizOver) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onTimeout={handleSkipAnswer}
            />
        </div>
    )
}
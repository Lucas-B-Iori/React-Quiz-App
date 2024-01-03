import quizCompleteImg from '../assets/quiz-complete.png'
import questions from '../question'

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null)
    const correctAnswers = userAnswers.filter((answer, index) => questions[index].answers[0] === answer)

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100)
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100)
    const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare

    return (
        <div id='summary'>
            <img src={quizCompleteImg} alt="Icone de Troféu" />
            <h2>Quiz Completo</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='text'>Não respondidas</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>Corretas</span>
                </p>
                <p>
                    <span className='number'>{incorrectAnswersShare}%</span>
                    <span className='text'>Incorretas</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer'

                    if(answer === null) {
                        cssClass += ' skipped'
                    } else if (answer === questions[index].answers[0]) {
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{questions[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Não respondida'}</p>
                        </li>
                    )
                })}
                
            </ol>
        </div>
    )
}
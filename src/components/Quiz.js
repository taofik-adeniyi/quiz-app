import React, {useState} from 'react'
import QuizQuestion from './QuizQuestion'
import quizData from '../data/quiz_data.json'
import FinishedQuiz from './FinishedQuiz'

function Quiz() {

    const [quizPosition, setQuizPosition] = useState(0)
    const [done, setDone] = useState('false')    
    const quizQuestion = quizData.quiz_questions[quizPosition]
    const [able, setAble] = useState('disabled')
    const [dable, setDable] = useState('')

    function showNumber(lolo) {
        setQuizPosition(lolo)
        if(quizPosition === 0){
            setAble('disabled')
        }else if(quizPosition > 0){
            setAble('')
        }else if (quizPosition === (quizData.quiz_questions.length - 1)) {
            setDable('disabled')
        }
    }

    function showPreviousQuestion(){
        if (quizPosition === 0){
            setAble('disabled')
        }else{
          setQuizPosition(quizPosition - 1)
          setDable('')
        }
    }

    function showNextQuestion(){
        if(quizPosition === quizData.quiz_questions.length - 1){
            setDable('disabled')
          }
          else {
            setQuizPosition(quizPosition + 1)
            setAble('')
        }
    }


    function submitQuiz(){
        if (done === "false"){
            setDone('true')
        }
    }

    const you = ((done == 'true'))
    
    return (
        <div>
            {you ? <FinishedQuiz />:
            <QuizQuestion 
                display={quizQuestion}
                prvqHandler={showPreviousQuestion}
                nxtqHandler={showNextQuestion}
                subqHandler={submitQuiz}
                pgnxtqHandler={quizData.quiz_questions}
                showNumber={showNumber}
                quizPosition={quizPosition}
                drup={able}
                dable={dable}
            />
            }
        </div>
    )
}


export default Quiz
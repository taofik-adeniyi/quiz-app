import React, {useState} from 'react'
import QuizQuestion from './QuizQuestion'
import quizData from '../data/quiz_data.json'
import FinishedQuiz from './FinishedQuiz'

function Quiz() {

    const [quizPosition, setQuizPosition] = useState(0)
    const [done, setDone] = useState('false')    
    const quizQuestion = quizData.quiz_questions[quizPosition]
     

    function showNumber(lolo) {
        setQuizPosition(lolo)
        // console.log('33-Beer' + lolo)
    }

    function showPreviousQuestion(){
        if (quizPosition === 0){
  
        }else{
          setQuizPosition(quizPosition - 1)
        }
    }

    function showNextQuestion(){
        if(quizPosition === quizData.quiz_questions.length - 1){
            
          } else {
            setQuizPosition(quizPosition + 1) 
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
            />
            }
        </div>
    )
}


export default Quiz
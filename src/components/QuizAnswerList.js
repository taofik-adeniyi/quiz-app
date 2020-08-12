import React from 'react'

function QuizAnswerList(props) {
    
    return (
        <li>
            <div>
            <a href="" onClick="">
                {props.answer_text}
            </a>
            </div>
        </li>
    )
}


export default QuizAnswerList
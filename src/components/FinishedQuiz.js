import React from 'react'


function FinishedQuiz(props) {
    return (
        <div className="two">
            <h3>Answers Submitted Succesfully</h3>
            <p>Your Result would be mailed to you</p>
            <p><a href="" onClick={props.subqHandler}>Reset Quiz</a></p>
        </div>
    )
}



export default FinishedQuiz
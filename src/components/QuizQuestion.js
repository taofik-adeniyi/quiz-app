import React, { useState } from 'react'
import QuizAnswerList from './QuizAnswerList'
import PageNextQuestion from './PageNextQuestion'

function QuizQuestion(props) {

    const [able, setAble] = useState('')
    
    // const mee = ((props.id === 1) (setAble('disabled')))

    // const nee = ((props.id > 1 && === props.pgnxtqHandler.length) (setAble('disabled')))

    return (
        <div>
            <div className="two">
                <div className="firstrow">
                    <div className="title">
                        <h3>Question {props.display.id} </h3>
                    </div>
                    
                    <div className="submit">
                        <button 
                            onClick={props.subqHandler}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="questionbody">
                    <div className="question">{props.display.instruction_text}</div>
                    
                    <div className="questionsoption">
                        <ul>
                            {props.display.answer_options.map((answer_option, index) => {
                                return (
                                    <QuizAnswerList 
                                    key={index}
                                    answer_text={answer_option}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                
                    <div className="controlbutton">
                        <button onClick={props.prvqHandler} disabled="">
                            Previous
                        </button>
                        <button onClick={props.nxtqHandler}>
                            Next Questions
                        </button>   
                    </div> 
                </div>
            
                <div className="questioninlogicalselection">
                    <h4>Questions in Logical Selection</h4>
                    {
                        props.pgnxtqHandler.map(function(id, index){
                            const lolo = id.id - 1
                            return (
                                <button onClick={() => props.showNumber(lolo)} key={index} >
                                    {id.id}
                                </button>
                            )
                            // <PageNextQuestion id={id.id} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizQuestion
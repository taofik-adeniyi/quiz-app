import React from 'react'
import QuizAnswerList from './QuizAnswerList'
import PageNextQuestion from './PageNextQuestion'

function QuizQuestion(props) {

    return (
        <div>
            <div className="two">
                <div class="firstrow">
                    <div class="title">
                        <h3>Question {props.display.id} </h3>
                    </div>
                    
                    <div class="submit">
                        <button 
                            onClick={props.subqHandler}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div class="questionbody">
                    <div class="question">{props.display.instruction_text}</div>
                    
                    <div class="questionsoption">
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
                
                    <div class="controlbutton">
                        <button onClick={props.prvqHandler}>
                            Previous
                        </button>
                        <button onClick={props.nxtqHandler}>
                            Next Questions
                        </button>
                    </div> 
                </div>
            
                <div class="questioninlogicalselection">
                    <h4>Questions in Logical Selection</h4>
                    {
                        props.pgnxtqHandler.map(function(id, index){
                            return <PageNextQuestion id={id.id} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizQuestion
import React from 'react'

function PageNextQuestion(props) {
    return (
            <button onClick={props.showNumber}>
                {props.id}
            </button>
    )
}


export default PageNextQuestion
import React from 'react';
import './QuizList.scss';
import QuizItem from './QuizItem/QuizItem';

const QuizList = props => {
    return (
        <ul className="quiz-list">
            { props.answers.map(answer => {
                return (
                    <QuizItem
                        key={answer.id}
                        answer={answer}
                        onAnswerClickHandler={props.onAnswerClickHandler}
                        answerState={props.answerState ? props.answerState[answer.id] : null}
                    />
                )
            }) }
        </ul>
    )
}

export default QuizList
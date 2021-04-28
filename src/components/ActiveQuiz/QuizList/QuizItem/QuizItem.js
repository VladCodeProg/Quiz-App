import React from 'react';
import './QuizItem.scss';

const QuizItem = props => {
    const cls = ['quiz-active-list-item']

    if (props.answerState) {
        cls.push(props.answerState)
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClickHandler(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default QuizItem
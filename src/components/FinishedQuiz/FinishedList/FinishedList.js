import React from 'react';
import './FinishedList.scss';

const FinishedList = props => {
    return (
        <ul className="quiz-list">
            { props.quiz.map(quizItem => {
                let cls = ['fas'];

                if (props.results[quizItem.id] === 'correct') {
                    cls = [...cls, 'fa-check', 'correct-result']
                } else if (props.results[quizItem.id] === 'wrong') {
                    cls = [...cls, 'fa-times', 'wrong-result']
                }

                return (
                    <li className="quiz-finished-list-item" key={quizItem.id}>
                        <span>{ quizItem.question }</span>
                        <i className={cls.join(' ')}/>
                    </li>
                )
            }) }
        </ul>
    )
}

export default FinishedList
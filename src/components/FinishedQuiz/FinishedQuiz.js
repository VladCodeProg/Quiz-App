import React from 'react';
import './FinishedQuiz.scss';
import FinishedList from './FinishedList/FinishedList';
import Button from '../UI/Button/Button';

const FinishedQuiz = props => {
    return (
        <div className="quiz-finished-wrapper">
            <h2 className="quiz-finished-title">Quiz results</h2>
            <FinishedList
                quiz={props.quiz}
                results={props.results}
            />
            <div className="quiz-buttons-wrapper">
                <Button
                    type="success"
                    onClick={props.onRetry}
                >Try again</Button>
                <Button
                    onClick={props.toHomePage}
                    type="warning"
                >Quizes list</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz
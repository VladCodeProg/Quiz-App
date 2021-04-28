import React from 'react';
import './FinishedQuiz.scss';
import FinishedList from './FinishedList/FinishedList';
import Button from '../UI/Button/Button';

const FinishedQuiz = props => {
    return (
        <div className="quiz-finished-wrapper">
            <h2 className="quiz-finished-title">Результаты теста</h2>
            <FinishedList
                quiz={props.quiz}
                results={props.results}
            />
            <div className="quiz-buttons-wrapper">
                <Button
                    type="success"
                    onClick={props.onRetry}
                >Заново</Button>
                <Button
                    onClick={props.toHomePage}
                    type="warning"
                >Главное меню</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz
import React from 'react';
import './ActiveQuiz.scss'
import QuizList from './QuizList/QuizList';

const ActiveQuiz = props => {
    return (
        <div className="quiz-wrapper">
            <div>
                <h3 className="quiz-title">{ props.quiz.question }</h3>
                <span>{ props.currentQuiz } из { props.length }</span>
            </div>
            <QuizList
                answers={props.quiz.answers}
                onAnswerClickHandler={props.onAnswerClickHandler}
                answerState={props.answerState}
            />
        </div>
    )
}

export default ActiveQuiz
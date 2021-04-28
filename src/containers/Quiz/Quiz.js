import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import './Quiz.scss';
import axios from '../../axios/axiosConfig';
import Loader from '../../components/UI/Loader/Loader';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isFinished: false,
            results: {},
            answerState: null,
            currentQuiz: 0,
            quiz: []
        }
    }

    async componentDidMount() {
        const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
        const quiz = response.data

        this.setState({
            quiz,
            loading: false
        })
    }

    onAnswerClickHandler = answerId => {
        const quiz = this.state.quiz[this.state.currentQuiz];
        const results = this.state.results;

        if (results[quiz.id] === 'correct') {
            return
        }

        if (answerId === quiz.rightAnswerId) {
            if (!results[quiz.id]) {
                results[quiz.id] = 'correct'
            }

            this.setState({
                answerState: {[answerId]: 'correct'},
                results
            })

            setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                }
                this.setState(prev => ({
                    currentQuiz: prev.currentQuiz + 1,
                    answerState: null,
                }))
            }, 800)
            if (results[quiz.id]) {
                return
            }
        } else {
            if (!results[quiz.id]) {
                results[quiz.id] = 'wrong';
            }
            this.setState({
                answerState: {[answerId]: 'wrong'},
                results
            })
        }
    }

    onRetry = () => {
        this.setState({
            isFinished: false,
            results: {},
            answerState: null,
            currentQuiz: 0
        })
    }

    toHomePage = () => {
        this.props.history.push('/')
    }

    isQuizFinished = () => {
        return this.state.currentQuiz + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className="quiz">
                <h1 className="main-title">Ответьте на все вопросы</h1>
                { this.state.loading 
                    ? <Loader />
                    : this.state.isFinished 
                        ? <FinishedQuiz
                            quiz={this.state.quiz}
                            results={this.state.results}
                            onRetry={this.onRetry}
                            toHomePage={this.toHomePage}
                        />
                        : <ActiveQuiz
                            quiz={this.state.quiz[this.state.currentQuiz]}
                            currentQuiz={this.state.currentQuiz + 1}
                            length={this.state.quiz.length}
                            onAnswerClickHandler={this.onAnswerClickHandler}
                            answerState={this.state.answerState}
                        /> }
            </div>
        )
    }
}

export default Quiz
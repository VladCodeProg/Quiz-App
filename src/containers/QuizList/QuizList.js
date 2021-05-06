import React, { Component } from 'react';
import './QuizList.scss';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axiosConfig';
import Loader from '../../components/UI/Loader/Loader';

class QuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            quizes: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('/quizes.json');
        const quizes = response.data;

        this.setState({
            quizes,
            loading: false
        });
    }

    render() {
        return (
            <div className="quiz-list-page">
                <h1 className="main-title">List of all quizes</h1>
                { this.state.quizes
                ? (
                    <ul className="quiz-list-ul">
                    { this.state.loading
                        ? <Loader />
                        : Object.keys(this.state.quizes).map((quizKey, index) => {
                                return (
                                    <li
                                        key={quizKey}
                                        className="quiz-list-ul-item"
                                    >
                                        <NavLink
                                            to={`quiz/${quizKey}`}
                                        >
                                            Quiz №{index + 1}
                                        </NavLink>
                                    </li>
                                )
                            })  }
                    </ul>
                )
                : (
                    <h2>No quizes yet</h2>
                ) }
            </div>
        )
    }
}

export default QuizList
import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import './QuizCreator.scss';
import { createControl, validate, validateForm } from '../../util/formControls';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';
import axios from '../../axios/axiosConfig';

function createOptionControl(id) {
    return createControl({
        label: `Вариант ${id}`,
        errorMessage: 'Значение не может быть пустым!',
        id
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым!'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

class QuizCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuizCreated: false,
            quiz: [],
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        }
    }

    addQuestionHandler = e => {
        e.preventDefault();

        const quiz = [ ...this.state.quiz ];
        const index = quiz.length + 1;

        const { question, option1, option2, option3, option4 } = this.state.formControls;

        const quizItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id }
            ]
        }

        quiz.push(quizItem);

        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        })
    }

    createQuizHandler = async e => {
        e.preventDefault();

        await axios.post('/quizes.json', this.state.quiz)

        this.setState({
            isQuizCreated: true,
            quiz: []
        })

        setTimeout(() => {
            this.setState({
                isQuizCreated: false
            })
        }, 3000)
    }

    changeHandler = (value, key) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[key] };

        control.value = value;
        control.touched = true;
        control.valid = validate(control.value, control.validation);

        formControls[key] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlKey, index) => {
            const control = this.state.formControls[controlKey];

            return (
                <React.Fragment key={controlKey + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlKey)}
                    />
                    { index === 0 && <hr/> }
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <div className="quiz-creator">
                <h2 className="main-title">Создание тест</h2>
                <form className="quiz-creator-wrapper">
                    { this.state.isQuizCreated
                        && <h3 className="quiz-creator-success">Тест успешо создан!</h3> }

                    { this.renderInputs() }

                    <Select
                        label="Выберите правильный ответ"
                        value={this.state.rightAnswerId}
                        onChange={this.selectChangeHandler}
                        options={[
                            {text: 1, value: 1},
                            {text: 2, value: 2},
                            {text: 3, value: 3},
                            {text: 4, value: 4}
                        ]}
                    />

                    <Button
                        type="success"
                        onClick={this.addQuestionHandler}
                        disabled={!this.state.isFormValid}
                    >
                        Добавить вопрос
                    </Button>

                    <Button
                        onClick={this.createQuizHandler}
                        disabled={this.state.quiz.length === 0}
                    >
                        Создать тест
                    </Button>
                </form>
            </div>
        )
    }
}

export default QuizCreator
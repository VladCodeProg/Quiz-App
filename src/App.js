import React from 'react';
import Quiz from './containers/Quiz/Quiz';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={QuizList} />
                <Route path="/quiz-creator" component={QuizCreator} />
                <Route path="/quiz/:id" component={Quiz} />
            </Switch>   
        </Layout>
    )
}

export default App

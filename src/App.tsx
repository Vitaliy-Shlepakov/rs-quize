import React from 'react';
import {GlobalStyle} from './common/GlobalStyles';
import styled from "styled-components";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <StyledApp>
            <Router>
                <Switch>
                    <Route path="/quiz" component={Quiz} exact/>
                    <Route path="/" component={Home} exact/>
                </Switch>
            </Router>
            <GlobalStyle/>
        </StyledApp>
    );
};

const StyledApp = styled.div`
    background: #ddd;
    min-height: 100vh;
`;

export default App;

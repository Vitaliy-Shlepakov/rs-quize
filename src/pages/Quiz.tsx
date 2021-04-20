import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import { Container } from "../common/Layout"
import {
    Title,
} from "../components";
import { getQuizes } from '../reducer/action-creators'
import {GlobalContext} from "../reducer/reducer";
import Loader from "../components/Loader";


const Quiz: React.FC = () => {

    const {state, dispatch} = useContext(GlobalContext);
    useEffect(() => {
        dispatch(getQuizes())
    }, [])

    return (
        <div>
            <Header/>
            <Container>
                <Title>Выберите правильные варианты ответа</Title>
                <Loader/>
            </Container>
        </div>
    );
};

export default Quiz;
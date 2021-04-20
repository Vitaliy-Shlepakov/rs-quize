import React, {useContext} from 'react';
import styled from "styled-components";
import {GlobalContext} from "../reducer";

type HeaderProps = {
    title?: string;
};

const Header: React.FC<HeaderProps> = () => {
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            { state.profession }
        </div>
    );
};

export default Header;
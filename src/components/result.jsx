import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 2rem;
    text-align: center;
`;

const ResultContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: #26C6DA;
    margin-top: 1rem;
    position: relative;
`;

const TextResult = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({result}) => {

    return(
    (result === 0) ? <Message>Chose brand, year and plan</Message> 
    : 
    (<ResultContainer>
        <TransitionGroup
            component="span"
            className="resultado"
        >
            <CSSTransition
                classNames="resultado"
                key={result}
                timeout={{ enter: 500, exit: 500 }}
            >
                <TextResult>Total is <span>${result}</span></TextResult> 
            </CSSTransition>
        </TransitionGroup>
    </ResultContainer>
    )
    )
}
 
Result.propTypes = {
    result: PropTypes.number.isRequired
}

export default Result;
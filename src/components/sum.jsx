import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {firstUpper} from '../helper'; 


const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Sum = ({data}) => {

    const {brand, year, plan} = data;

    if (brand === '' || year === '' || plan === '') return null; 

    return ( 
        <SummaryContainer>
            <h2>Summary</h2>
            <ul>
                <li>Brand: { firstUpper(brand) }</li>
                <li>Year: { firstUpper(year) }</li>
                <li>Plan: { firstUpper(plan) }</li>
            </ul>
        </SummaryContainer>
     );
}

Sum.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Sum;
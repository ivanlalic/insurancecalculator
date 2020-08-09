import React, {useState} from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {getYearDifference, brandCalculator, planCalculator} from '../helper'; 

const FormImput = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;
    &:hover {
        background-color: #26c6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({setSum, setLoading}) => {

    // States
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);


    // Get values
    const {brand, year, plan} = data;

    //Read data from Form and pass them to state
    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value 
        })
    }

    //When user press Submit
    const handleSubmit = e => {
        e.preventDefault();
        if (brand === '' || year === '' || plan === '') {
            setError(true);
            return;
        }
        setError(false); 

        // Total min
        let result = 2000; 

        // After validation→get year difference
        const difference = getYearDifference(year);
       
        //3% for each year
        result -= (( difference *3 ) * result) / 100;  

        //American 15%
        //Asian 5%
        //European 30%
        result = brandCalculator(brand) * result;
        
        //Plan→Basic add 20%
        //Plan→full add 50%
        result = parseFloat(planCalculator(plan) * result).toFixed(2);

        //Change for spinner→spinner appears
        setLoading(true);

        setTimeout(()=> {
            //Change for spinner→delete spinner
            setLoading(false);

            //Pass result to app.js
            setSum({
                result: Number(result),
                data: data
            })
        }, 1000)

    }

    
    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error>All inputs requiered</Error> : null}

            <FormImput>
                <Label>Car Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </FormImput>

            <FormImput>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </FormImput>

            <FormImput>
                <Label>Type of Insurance</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === 'basic'}
                    onChange={getData}
                /> Basic

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === 'full'} //how to handle radio buttons
                    onChange={getData}
                /> Full
            </FormImput>

            <Button type="submit">Search</Button>
        </form>
     );
    }

Form.propTypes = {
    setSum: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form;



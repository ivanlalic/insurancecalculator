import React, {useState} from 'react';
import Header from './components/header';
import Form from './components/Form';
import Sum from './components/sum';
import Result from './components/result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;  
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {

  // State
  const [sum, setSum] = useState({
    result: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  }); // Comes from Form


  //state for spinner

  const [loading, setLoading] = useState(false);

  //Extract data
  const {result, data} = sum;


  return (
    <Container>
      <Header 
        title='Insurance Calculator'
      />

      <FormContainer>
        <Form 
          setSum={setSum}
          setLoading={setLoading}
        />

        {loading ? <Spinner /> : null}

        <Sum 
          data={data}
        />

        { !loading ? 
        <Result 
          result={result}
        /> 
        : null}
        
      </FormContainer>
    </Container>
  );
}

export default App;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';

const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 0 15px;
`;

const FormTitle = styled.h1`
  margin: 45px 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const StyleLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledField = styled(Field)`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 15px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: inherit;
`;

const StyledError = (props) => {
  const { style, ...other } = props;

  return (
    <div
      style={{
        marginBottom: '10px',
        color: '#ff6464',
      }}
    >
      <ErrorMessage {...other} />
    </div>
  );
};

const StyledButton = styled.button`
  padding: 12px 45px;
  background: #64cc64;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  font-family: inherit;
  font-weight: bold;
`;

export default function FormikPage() {
  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string().min(3).required('username required'),
          email: Yup.string().email('invalid email').required('email required'),
          password: Yup.string().required('password required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'passwords must match')
            .required('confirm password required'),
        })}
        onSubmit={(values) => {
          const message = Object.keys(values)
            .map((prop) => `${prop}: ${values[prop]}\n`)
            .join('');
          alert(message);
        }}
      >
        <Form>
          <FormTitle>Form Validation</FormTitle>

          <FormGroup>
            <StyleLabel htmlFor="username">Username:</StyleLabel>
            <StyledField
              type="text"
              name="username"
              id="username"
              autoComplete="off"
            />
            <StyledError name="username" />
          </FormGroup>

          <FormGroup>
            <StyleLabel htmlFor="email">Email:</StyleLabel>
            <StyledField
              type="email"
              name="email"
              id="email"
              autoComplete="off"
            />
            <StyledError name="email" />
          </FormGroup>

          <FormGroup>
            <StyleLabel htmlFor="password">Password:</StyleLabel>
            <StyledField type="password" name="password" id="password" />
            <StyledError name="password" />
          </FormGroup>

          <FormGroup>
            <StyleLabel htmlFor="confirmPassword">Confirm Password:</StyleLabel>
            <StyledField
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <StyledError name="confirmPassword" />
          </FormGroup>

          <FormGroup>
            <StyledButton type="submit">Submit</StyledButton>
          </FormGroup>
        </Form>
      </Formik>
    </Container>
  );
}

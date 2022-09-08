import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  margin: 10px auto;
  width: 300px;
  height: 20px;
  border: 1px solid;
  border-radius: 5px;
  padding: 3px;
  background-color: #cec1df2e;
  color: #e99797;
`;

export const InputForm = styled(Field)`
  display: block;
  margin-bottom: 10px;
  margin-top: 5px;
`;

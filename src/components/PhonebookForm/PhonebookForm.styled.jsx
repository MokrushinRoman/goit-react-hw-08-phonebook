import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
  gap: 20px;
  border: 1px solid #333333;
  padding: 15px;
  border-radius: 10px;
`;

export const Field = styled.label`
  font-size: 20px;

  & + & {
    margin-left: 15px;
  }

  input {
    width: 250px;
    display: block;
    font-size: 15px;
    outline: none;
    padding: 3px 6px;
  }
`;

export const Submit = styled.button`
  display: block;
  margin-left: 30px;
  padding: 5px 10px;
  border-radius: 10px;
`;

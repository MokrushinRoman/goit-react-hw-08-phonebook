import styled from '@emotion/styled';
export const List = styled.ul`
  margin-top: 30px;
  padding: 15px;
  width: 100%;
  max-width: 600px;
  border: 1px dashed #333333;
`;

export const Item = styled.li`
  display: flex;
  margin: 0 auto;
  width: 70%;
  min-width: 70%;
  max-width: 100%;

  &:not(:last-child) {
    padding-bottom: 10px;
  }

  & > p {
    display: block;
    margin-right: auto;
    font-size: 20px;
  }

  & + & {
    border-top: 1px solid #333333;
    padding-top: 10px;
  }
`;

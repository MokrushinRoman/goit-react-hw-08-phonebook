import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  &.active {
    color: #22cea9;
    text-decoration: underline;
  }

  & + & {
    margin-left: 20px;
  }
`;
export const Container = styled.div`
  display: flex;
  margin-left: auto;
`;

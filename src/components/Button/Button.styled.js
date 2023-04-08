import styled from 'styled-components';

export const StyledButton = styled.button`
padding: 8px 16px;
  border-radius: 2px;
  background-color: #461646;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 35px auto;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 2px 2px 1px rgba(207, 207, 207, 0.2),
    0px 2px 2px 1px rgba(221, 221, 221, 0.14),
    0px 3px 1px -2px rgba(207, 207, 207, 0.12);
}

&:hover,
&:focus {
  background-color: #5a0e5a;
}
`;

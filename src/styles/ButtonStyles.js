import styled, { css } from 'styled-components';

const ButtonStyles = styled.button`
    font-size: 50px;
    background-color: violet;
    margin: auto;
    padding: 5px;
    ${({primary}) => primary && css`
        font-size:  100px;
        background-color: red
    `}
`;
export default ButtonStyles;
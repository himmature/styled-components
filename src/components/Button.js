import React from 'react';
import styled from 'styled-components';
import ButtonStyles from '../styles/ButtonStyles';

const StyledButton = styled(ButtonStyles)`
    
`;

const Button = ({primary, children}) => {
return <StyledButton primary={primary}>{children}</StyledButton>
}

export default Button;
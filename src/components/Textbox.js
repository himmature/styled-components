import React from 'react';
import styled from 'styled-components';

const StyledTextbox = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'First Name'
}))`
    box-shadow: 5px 10px grey;
    color: ${({theme}) => theme.mild}
`;

const Textbox = (props) => {
    console.log(props);
return <StyledTextbox theme={props.theme}></StyledTextbox>
}

export default Textbox;
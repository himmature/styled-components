import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Textbox from './components/Textbox';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

const MainWrapper = styled.div`
    border: 2px solid black;
    border-radius: 2px;
    width: 100%;
    padding: 5px;
    background-color: ${ props => props.theme.colors.dark}
`;

const App = () => {
  return (
      <ThemeProvider theme={Theme}>
        {/* <GlobalStyles /> */}
        <MainWrapper>
          <Button primary>Click Me</Button>
          <Textbox></Textbox>
        </MainWrapper>
      </ThemeProvider>
  );
}

export default App;
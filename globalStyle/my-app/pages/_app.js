import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.main.css';

import {Inter} from 'next/font/google';
import {ThemeProvider} from 'styled-components';

const theme = {
  color : {
    primary : '#355C7D',
  },
};
function Myapp({Component, pageProps}) {
  return (<ThemeProvider theme = {theme}>
          <component { ...pageProps } />
    </ThemeProvider>);
}
export default Myapp;

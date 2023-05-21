import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.main.css';

const theme = {
  color: {
    primary: '#355C7D',
  },
};
function Myapp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <component {...pageProps} />
    </ThemeProvider>
  );
}
export default Myapp;

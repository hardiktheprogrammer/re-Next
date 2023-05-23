import '../style/globals.css';
import '../style/layout.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
function Myapp({ Component, pageProps }) {
  return (
    <>
      <Header />
      return <Component {...pageProps} />;
      <Footer />
    </>
  );
}
export default Myapp;

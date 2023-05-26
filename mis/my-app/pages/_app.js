import 'styles/globals.css';
import 'styles/layout.css';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
function Myapp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
export default Myapp;

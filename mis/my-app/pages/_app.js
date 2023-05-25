import 'styles/globals.css';
import 'styles/layout.css';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
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

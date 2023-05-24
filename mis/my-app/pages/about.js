import Head from 'next/head';

import Footer from '../components/layout/Footer';

function About() {
  return (
    <>
      <Head>
        <title>About RestroBar </title>

        <meta name="description" content="White chaatni" />
      </Head>
      <h1 ClassName="Content">About</h1>
    </>
  );
}
export default About;

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

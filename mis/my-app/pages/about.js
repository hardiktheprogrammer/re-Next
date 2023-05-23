import Footer from '../components/layout/Footer';
function About() {
  return <h1 ClassName="Content">About</h1>;
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

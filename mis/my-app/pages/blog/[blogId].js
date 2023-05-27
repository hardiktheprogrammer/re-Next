import Head from 'next/head';
function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name=" description " content={description} />
      </Head>
      <h1 ClassName="content"> Article</h1>
    </>
  );
}
export default Blog;

export async function getStaticSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  };
}

import Head from 'next/head';
function Blog({title, description}) {
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
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  };
}

import Head from 'next/head';
function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name=" description " content={description} />
      </Head>
      <h1 ClassName="content">
        {/* Evn User {process.env.DB_User} Password {process.env.DB_Password} */}
        Env Analytics{process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}
export default Blog;

export async function getStaticSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(`Connecting to database with users ${user} and password ${password}`);
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  };
}

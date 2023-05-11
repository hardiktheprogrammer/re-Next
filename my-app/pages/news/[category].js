function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing news for Ca</h1>
    </>
  );
}
export default ArticleListByCategory;
export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  const response = await fetch(`https://localhost:4000/news?category=${category}`);

  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}

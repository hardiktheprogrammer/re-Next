function NewsArticleList({ articles }) {
  return (
    <>
      <h1> List Of News Articles</h1>
      {articles.map((article) => {
        return (
          <div Key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default NewsArticleList;

export async function getServerSideProps() {
  console.log('Pre-rendering NewsArticleList');
  const response = await fetch('http://localhost:3000/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}

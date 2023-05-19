function comment({ comment }) {
  return (
    <div>
      {comment.id}, {comment.text}
    </div>
  );
}
export default comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "1" } },
      { params: { commentId: "1" } },
    ],

    fallback: false,
  };
}

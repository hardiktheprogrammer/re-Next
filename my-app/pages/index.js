import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>NextJS Pre-Rendering</h1>

      <Link href="/users">
        <h1>User</h1>
      </Link>
      <Link href="/posts">
        <h2>Posts</h2>
      </Link>
      <Link href="/news">
        <h2>news</h2>
      </Link>
      <Link href="/products">
        <h2>products</h2>
      </Link>
      <Link href="/dashboard">
        <h2>Dashdoard</h2>
      </Link>
    </>
  );
}

export default Home;

import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>NextJS Pre-Rendering</h1>

      <Link href="/users">
        <h1>User</h1>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>

    </>
  );
}

export default Home;

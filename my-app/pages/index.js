import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>NextJS Pre-Rendering</h1>

      <Link href="/user">
        <h1>User</h1>
      </Link>
    </>
  );
}

export default Home;

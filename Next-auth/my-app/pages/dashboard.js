import {useSession} from 'next-auth/client';
function Dashboard() {
  const [session, loading] = useSession();
  console.log({session, loading});
  return <h1>Dahboard page < /h1>;
}

export default Dashboard;

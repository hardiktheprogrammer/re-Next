import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard-swr');
  const data = await response.json();
  return data;
};
function DashboardSWR() {
  const { data, error } = useSWR('dashboard', fetcher);
  if (error) return;
  if (!data) return;
  return (
    <div>
      <h2>Likes - {data.post}</h2>
      <h2> Followers - {data.followers}</h2>
      <h2>posts - {data.posts}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;

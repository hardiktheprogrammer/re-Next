import React from 'react';

import { useState, useEffect } from 'react';
function DashboardData() {
  const [isLoading, setIsLoading] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const response = await fetch('http://localhost:4000/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch data from server');
        }
        const data = await response.json();
        setDashboardData(data);
        setIsLoading(null);
      } catch (error) {
        console.error(error);
        setIsLoading(null);
      }
      // const response = await fetch('http://localhost:4000/dashboard');
      // const data = await response.json();
      // setDashboardData(data);
      // setIsLoading(false); //
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2> Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {dashboardData && (
        <>
          <h2>Posts - {dashboardData.posts}</h2>
          <h2>Likes - {dashboardData.likes}</h2>
          <h2>Following - {dashboardData.following}</h2>
          <h2>Followers - {dashboardData.followers}</h2>
        </>
      )}
    </div>
  );
}

export default DashboardData;

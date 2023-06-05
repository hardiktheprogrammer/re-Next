<<<<<<< HEAD
import { getSession, signIn } from "next-auth/client";
import { useEffect, useState } from "react";

=======
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/client';
>>>>>>> API
function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return <h1>Dahboard page</h1>;
=======
import { useSession } from "next-auth/client";
function Dashboard() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return <h1>Dahboard page </h1>;
>>>>>>> ba2119cbf3c10cfe997c98dfdc03e6550ac634bd
}

export default Dashboard;

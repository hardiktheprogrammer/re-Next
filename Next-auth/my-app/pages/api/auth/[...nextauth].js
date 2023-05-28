import NextAuth from 'next-auth';
import Provider from 'next-auth/providers';
export default NextAuth({
  providers: [
    Provider.Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

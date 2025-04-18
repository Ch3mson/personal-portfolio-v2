import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }) {
      return user.email === process.env.PRIVATE_EMAIL;
    }
  }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials;

        const res = await fetch(process.env.BASE_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        if (user && res.status == 200) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.username;
        token.accessToken = user.accessToken;
        token._id = user._id;
      }

      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };

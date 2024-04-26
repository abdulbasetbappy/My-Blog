import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    pages: {
        signIn: "/login",
      },
    providers: [
        //@ts-expect-error
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: { },
            async authorize(credntials:{username:string,password:string}) {
                //TODO Fetch Users from DB
                return {};
            }
        })
    ],
    session: {
        strategy: "jwt",
      },
    
      callbacks: {
        async jwt({ token, user, account }) {
          if (user) {
            token = {
              ...token,
              ...user,
            };
          }
    
          return token;
        },
    
        async session({ session, token }) {
          session.user = {
            ...token,
            ...session.user,
          };
    
          return session;
        },
      },
})
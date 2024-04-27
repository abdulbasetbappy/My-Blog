import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {User} from '~/server/models/User';
import bcrypt from 'bcrypt';


export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    pages: {
        signIn: "/login",
      },
    providers: [
        //@ts-expect-error
        CredentialsProvider.default({
            name: 'credentials',
            credentials: { },
            async authorize(credntials:{username:string,password:string}) {
              //Find User by email
              const user  = await User.findOne({email:credntials.username});
              if (!user) {
                throw createError({
                  statusCode: 401,
                  statusMessage: "User not found",
                });
              }
      
              const isValid = await bcrypt.compare(
                credntials.password,
                user.password
              );
      
              if (!isValid) {
                throw createError({
                  statusCode: 401,
                  statusMessage: "Unauthorized",
                });
              }

              return {

              };
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
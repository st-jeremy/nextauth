import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers:[
    CredentialsProvider({
      async authorize(credentials, req) {
        const user = { id: 1, name: "Manager", email: "jsmith@example.com" }

        if(credentials?.email === 
          "test@sendme.ng" ||
          "manager@sendme.ng"
          && 
          credentials?.password===
          "hello123" ){
        return user
        }else{
          return null;
        }
      }
    })
  ],
  secret: process.env.JWT_SECRET,
  session:{
    maxAge: 1*60*60*24,
    updateAge: 10*60*60*24
  },
  callbacks: {
    async signIn() {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    },
  },
  pages: {
    signIn: '/auth/SignIn',
    signOut: '/auth/SignOut',
  }
})
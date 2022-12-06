import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/router";


export default NextAuth({
  providers:[
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
    CredentialsProvider({
      // name: 'Email',
      // credentials: {
      //   email: { label: "Email", type: "text", placeholder: "jsmith" },
      //   password: {  label: "Password", type: "password", placeholder:"minimum of 8 characters" }
      // },
      async authorize(credentials, req) {
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
        if(credentials?.email=="test@gmail.com" && credentials?.password=="hello123"){
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
      // console.log(user);
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
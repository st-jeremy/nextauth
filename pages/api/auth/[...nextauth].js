import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
  
  providers:[
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@gmail.com" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "Manager", email: "test@gmail.com" }

        if(credentials.email === "test@gmail.com" && credentials.password=== "12345" ){
        return user
        }else{
          return null
          // Possibly add an incorrect alert here!
        }
      }
    })
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session:{
    maxAge: 10*60*60*24,
    updateAge: 10*60*60*24
  },

  callbacks: {
    async signIn() {
      const isAllowedToSignIn = true

      if (isAllowedToSignIn) {
        return true
      } else {
        return  false
      }
    },
  },

  pages: {
    signIn: '/auth/signin',
    // error: '/auth/Error'
  }
})
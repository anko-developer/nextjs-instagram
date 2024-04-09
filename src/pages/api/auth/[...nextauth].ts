import { addUser } from '@/service/user'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) {
        return false
      }
      addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0],
      })
      return true
    },
    async session({ session }) {
      // console.log(session);
      const user = session?.user
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

export default NextAuth(authOptions)

// {
//   user: {
//     name: '앙꼬',
//     email: 'mycarton2201@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ACg8ocLCM2YYUZg3SKX3EJDy5Rsw4ofHHvsOlA8PICqxe0wXRyE-fubW=s96-c'
//   },
//   expires: '2024-05-08T01:33:30.472Z'
// }

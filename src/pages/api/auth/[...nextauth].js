import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


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
        async signIn({user, account, profile}) {
            // console.log("account >> ",account)
            // console.log("profile >> ",profile)
            return true;
        //   if (
        //     account.provider === 'google' &&
        //     profile.verified_email === true &&
        //     profile.email.endsWith('@ku.th')
        //   ) {
        //     console.log('inCallBack ', account);
        //     return "/Home";
        //   }
        //   else{
        //     return "/";
        //   }
        //   } else if (
        //     account.provider === 'google' &&
        //     profile.verified_email === true &&
        //     profile.email.endsWith('@gmail.com')
        //   ) {
        //     //actually Email change to .eng
        //     console.log(profile.email);
        //     return true;
        //   } else {
        //     return false;
        //   }
        },
        async redirect({ url, baseUrl   }) {
        //   console.log("redirect ",baseUrl)
          if (url.startsWith("/")) return `${baseUrl}/Home`
          // Allows relative callback URLs
          else return `${baseUrl}`
        //   return console.log("fffs ",baseUrl)
        }
      },
    pages: {
        // signIn: '/auth/signin',
        // signOut:'/registerNisit',
        // newUser: "/register",
    },
}
export default NextAuth(authOptions)
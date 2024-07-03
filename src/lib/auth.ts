import NextAuth from "next-auth";
import google from "next-auth/providers/google";

/* 
  TODO: Email 검증 DB 구축
**/
const VALID_EMAIL_REGEX = process.env.VALID_EMAIL;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const isVerified = profile?.email_verified === true;
        const isValidEmail = VALID_EMAIL_REGEX
          ? new RegExp(VALID_EMAIL_REGEX).test(profile?.email || "")
          : false;

        return isVerified && isValidEmail;
      }

      return true;
    },
    async authorized({ auth }) {
      return auth !== null;
    },
  },
  pages: {
    error: "/error/auth",
  },
});

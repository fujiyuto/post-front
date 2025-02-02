import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    secret: process.env.AUTH_SECRET, // 環境変数に設定
  ],
  pages: {
    signIn: '/auth/',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // サインイン時のカスタムロジック
      return true; // サインインを許可
    },
    async redirect({ url, baseUrl }) {
      // リダイレクト先のカスタマイズ
      return baseUrl; // ベースURLにリダイレクト
    },
    async session({ session, token, user }) {
      // セッションのカスタマイズ
      return session; // セッションオブジェクトを返す
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // JWTのカスタマイズ
      return token; // トークンオブジェクトを返す
    },
  },
  debug: true, // デバッグ情報を有効にする
});

export const { handlers, auth, signIn, signut } = NextAuth(config)
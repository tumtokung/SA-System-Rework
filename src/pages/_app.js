import "../styles/reset.css"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import Layout from "@/containers/Layout";
import AuthProvider from "@/context/AuthProvider";

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

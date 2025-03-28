import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "katex/dist/katex.min.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.dir = 'rtl';  // Set RTL direction globally
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableColorScheme enableSystem={false}>
        <Analytics />
        <SpeedInsights />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

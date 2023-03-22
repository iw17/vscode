import type { AppProps } from "next/app.js"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

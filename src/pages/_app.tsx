import type { AppProps } from 'next/app'

import { Footer, Header } from '../layouts'

import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

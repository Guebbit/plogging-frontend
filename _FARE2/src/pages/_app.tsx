import '../assets/scss/globals.scss'
import type { AppProps } from 'next/app';
import {Provider} from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

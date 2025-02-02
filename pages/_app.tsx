import '../reset.css';
import '../globals.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

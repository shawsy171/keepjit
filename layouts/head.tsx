import React from 'react';
import Head from 'next/head';

// styles
import RESET from '../styles/reset';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const CustomHtmlHead = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{RESET}</style>
  </div>
)

export default CustomHtmlHead;

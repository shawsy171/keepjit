import React from 'react';
import Head from 'next/head';

// styles
import GlobalStyle from '../styles/reset';
// import hljsCss from '../styles/highlightjs';

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
    <GlobalStyle />
    {/* <style jsx>{`.head { color: blue }`}</style> */}
  </div>
)

export default CustomHtmlHead;

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class UfrpeDevsDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="assets/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// UfrpeDevsDocument.getInitialProps = async ctx => {
//   // Render app and page and get the context of the page with collected side effects.
//   const initialProps = await Document.getInitialProps(ctx)

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       <React.Fragment key="styles">
//         {initialProps.styles}
//       </React.Fragment>
//     ]
//   }
// }

export default UfrpeDevsDocument;

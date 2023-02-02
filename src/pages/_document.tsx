import Document from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=satoshi@500,401,400&f[]=bespoke-serif@400,401&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.svg" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<{styleTags: any}> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
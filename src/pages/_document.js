import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TR4CC4XSDZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TR4CC4XSDZ');
          `,
          }}
        />
      </Head>

      {/* need to specify this here otherwise some mobile devices in landscape will have ugly white margins*/}
      <body className="bg-dark-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      {/* need to specify this here otherwise some mobile devices in landscape will have ugly white margins*/}
      <body className="bg-dark-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

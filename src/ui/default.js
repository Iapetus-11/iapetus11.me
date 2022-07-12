import Head from "next/head";
import Script from "next/script";
import aboutMe from "../lib/data/aboutMe";

export default function Default(props) {
  return (
    <main className="select-none bg-gradient-to-r from-dark-dark via-dark-normal via-dark-light via-dark-normal to-dark-dark h-full w-full fixed overflow-y-auto">
      <Head>
        <title>Milo Weinberg</title>
        <link rel="icon" type="image/png" href="images/petus-circle.png"></link>

        <meta name="title" content="Iapetus-11" />
        <meta name="keywords" content="iapetus11, iapetus-11, milo, weinberg, milo weinberg" />
        <meta name="description" content={aboutMe} />

        {/* meta for embeds in discord and facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Milo / Iapetus11" />
        <meta property="og:description" content={aboutMe} />
        <meta property="og:url" content="https://iapetus11.me/" />
        <meta property="og:image" content="https://iapetus11.me/static/images/petus-circle.png" />

        {/* meta for embeds in twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Milo / Iapetus11" />
        <meta name="twitter:description" content={aboutMe} />
        <meta name="twitter:url" content="https://iapetus11.me/" />
        <meta name="twitter:image" content="https://iapetus11.me/static/images/petus-circle.png" />
      </Head>

      {/* font awesome */}
      <Script src="https://kit.fontawesome.com/8b5bae0343.js" crossOrigin="anonymous" />

      {props.children}
    </main>
  );
}

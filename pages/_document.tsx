import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="title" content="Nestar Demo" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" type="image/png" href="" />

      {/* SEO - Search engine Optimization */}
      <meta name="keyword" content={"nestar, nestar.uz, devex mern, mern nestjs, mern nestjs fullstack"} />
      <meta name="description" content={"Buy and sale properties anywhere anytime in South Korea."} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

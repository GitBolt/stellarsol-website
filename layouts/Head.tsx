import Head from 'next/head';

interface SEO {
  title?: string;
  description?: string;
  image?: string;
}

export const DefaultHead = (config: SEO) => {
  return (
    <Head>
      <title>{config.title || 'StellarSOL'}</title>
      <meta name='description' content={config.description || 'Spend crypto to buy stuff on popular merchants'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="theme-color" content="white" />
      <link rel='icon' href='/favicon.png' />
      <meta property='og:type' content={'website'} />
      <meta property='og:url' content={'https://stellarsol.app'} />
      <meta property='og:title' content={config.title || 'StellarSOL'} />
      <meta property='og:description' content={config.description || 'Spend crypto to buy stuff on popular merchants'} />
      <meta property='og:image' content={config.image || "https://media.discordapp.net/attachments/865444983762452520/1004455584059371551/banner-1.png?width=1440&height=480"} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='og:url' content={'https://stellarsol.app'} />
      <meta property='twitter:title' content={config.title || 'StellarSOL'} />
      <meta property='twitter:description' content={config.description || 'Spend crypto to buy stuff on popular merchants'} />
      <meta property='twitter:image' content={config.image || "https://media.discordapp.net/attachments/865444983762452520/1004455584059371551/banner-1.png?width=1440&height=480"} />
    </Head>
  );
};
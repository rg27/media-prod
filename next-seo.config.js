const title = 'Rey Mar Gualvez – Software Developer';
const description =
  'Front-end developer.';

const SEO = {
  title,
  description,
  canonical: 'https://leerob.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://leerob.io',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@gualvez_mar',
    site: '@gualvez_mar',
    cardType: 'summary_large_image'
  }
};

export default SEO;

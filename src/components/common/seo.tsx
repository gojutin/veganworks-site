import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  title?: string;
}
const SEO: React.FC<Props> = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `);

  const metaData = data.site.siteMetadata;

  const { description, url } = metaData;
  const mainLogo = `${url}/veganworks-logo.png`;
  return (
    <Helmet>
      <html lang="en" />
      <title>{title || metaData.title}</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={mainLogo} />
      <meta
        name="keywords"
        content="vegan, snack, boxes, variety, pack, back to school, treats, sweets, chocolate, amazon, veganworks, vegetarian, holidays, christmas, prime, day"
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={mainLogo} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"@gojutin"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={mainLogo} />

      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="icons/icon-192x192.png" />
    </Helmet>
  );
};

export { SEO };

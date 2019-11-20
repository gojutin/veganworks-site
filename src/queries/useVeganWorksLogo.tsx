// DEPRECATED IN FAVOR OF SVGS

import { graphql, useStaticQuery } from "gatsby";
import useMedia from "use-media";

const useVeganWorksLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileLogo: file(
        relativePath: { eq: "veganworks-logo-small-screen.png" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 420) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      desktopLogo: file(relativePath: { eq: "veganworks-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 420) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  const isSmall = useMedia({ maxWidth: 500 });

  const logoData = isSmall
    ? data.mobileLogo.childImageSharp.fluid
    : data.desktopLogo.childImageSharp.fluid;
  return logoData;
};

export { useVeganWorksLogo };

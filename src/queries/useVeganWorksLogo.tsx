import { graphql, useStaticQuery } from "gatsby";

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
  return data;
};

export { useVeganWorksLogo };

import { graphql, useStaticQuery } from "gatsby";

const useVeganWorksCoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "veganworks-cover.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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

export { useVeganWorksCoverImage };

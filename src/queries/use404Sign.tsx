import { graphql, useStaticQuery } from "gatsby";

const use404Sign = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "404-sign.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return data.logo.childImageSharp.fluid;
};

export { use404Sign };

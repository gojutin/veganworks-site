import { graphql, useStaticQuery } from "gatsby";

const useGetOutSign = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "get-out.png" }) {
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

export { useGetOutSign };

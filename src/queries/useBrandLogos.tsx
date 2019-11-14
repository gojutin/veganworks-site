import { graphql, useStaticQuery } from "gatsby";

const useBrandLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/brands/*/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(height: 100) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

export { useBrandLogos };

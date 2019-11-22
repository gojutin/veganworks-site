import { graphql, useStaticQuery } from "gatsby";

const use404Cover = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "404-cover.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return data;
};

export { use404Cover };

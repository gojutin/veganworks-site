import { graphql, useStaticQuery } from "gatsby";

const useLostCoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "lost-cover.jpg" }) {
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

export { useLostCoverImage };

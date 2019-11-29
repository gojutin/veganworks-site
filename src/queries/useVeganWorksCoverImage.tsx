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
    }
  `);
  return data;
};

export { useVeganWorksCoverImage };

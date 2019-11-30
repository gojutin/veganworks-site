import { graphql, useStaticQuery } from "gatsby";

const useCommunitySolidarityData = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "community-solidarity-cover3.jpg" }) {
        childImageSharp {
          fluid(quality: 98, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      csLogo: file(relativePath: { eq: "community-solidarity-logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 98, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      stats: allAirtable(filter: { table: { eq: "Stats" } }) {
        edges {
          node {
            data {
              Pounds
            }
          }
        }
      }
    }
  `);
  return data;
};

export { useCommunitySolidarityData };

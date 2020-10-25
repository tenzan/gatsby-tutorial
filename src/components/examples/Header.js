import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(getData);
  console.log(data);

  return (
    <div>
      <h1>this is our header</h1>
    </div>
  );
};

export default Header;

import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import * as queryString from "query-string";

const ArtistPage = ({ location }) => {
  const { id } = queryString.parse(location.search);
  console.log(id);

  return (
    <Layout>
      <main>
        <h1>{location.state.artist.name}</h1>
      </main>
    </Layout>
  );
};

export default ArtistPage;

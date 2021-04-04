import * as React from "react";
import Layout from "../components/layout";

const SITE_NAME = "terrestrial assemblage";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>{SITE_NAME}</title>
        <marquee width="100%" direction="left" scrollamount="1">
          <h1
            className="text-9xl text-white"
            style={{
              fontSize: 400,
            }}
          >
            {SITE_NAME.toUpperCase()}
          </h1>
        </marquee>
      </main>
      <div>adsfklajsflkajsf laskdfjklsdfj alkjasfksa fdalskdfjlksfjs</div>
    </Layout>
  );
};

export default IndexPage;

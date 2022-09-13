import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export async function getStaticProps() {
  const date = new Date().toISOString();

  return {
    props: {
      date,
    },
  };
}

const SSG = ({ date }: any) => {
  return <div>{date}</div>;
};

SSG.getLayout = (page: NextPage) => (
  <Layout>
    <SubLayout>{page}</SubLayout>
  </Layout>
);

export default SSG;

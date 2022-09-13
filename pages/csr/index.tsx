import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

const CSR = () => {
  const [date, setDate] = useState<string>();

  useEffect(() => {
    setDate(new Date().toISOString());
  }, []);

  return <div>{date}</div>;
};

CSR.getLayout = (page: NextPage) => (
  <Layout>
    <SubLayout>{page}</SubLayout>
  </Layout>
);

export default CSR;

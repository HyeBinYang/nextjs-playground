import React from "react";

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

export default SSG;

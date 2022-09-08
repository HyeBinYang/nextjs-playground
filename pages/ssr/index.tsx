import React from "react";

export async function getServerSideProps() {
  const date = new Date().toISOString();

  return {
    props: {
      date,
    },
  };
}

const SSR = ({ date }: any) => {
  return <div>{date}</div>;
};

export default SSR;

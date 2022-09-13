import React from "react";

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 10,
  };
}

const ISR = ({ time }: any) => {
  return <h1>{time}</h1>;
};

export default ISR;

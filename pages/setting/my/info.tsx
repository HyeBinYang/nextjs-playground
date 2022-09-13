import { useRouter } from "next/router";
import React, { useState } from "react";

export async function getServerSideProps() {
  console.log("Server");

  return {
    props: {},
  };
}

const Info = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = "initial" } = router.query;

  return (
    <>
      <h1>Clicked : {String(clicked)}</h1>
      <h1>Status : {status}</h1>
      <button
        onClick={() => {
          alert("Edit!!");
          setClicked(true);
          location.replace("/setting/my/info?status=editing");
        }}
      >
        Edit (replace)
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          alert("Edit!!");
          setClicked(true);
          router.push("/setting/my/info?status=editing");
        }}
      >
        Edit (push)
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          alert("Edit!!");
          setClicked(true);
          router.push("/setting/my/info?status=editing", undefined, { shallow: true });
        }}
      >
        Edit (push)
      </button>
    </>
  );
};

export default Info;

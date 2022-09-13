import { useRouter } from "next/router";
import React from "react";

const CategorySlug = () => {
  const router = useRouter();

  console.log(router);
  const { slug, from } = router.query;

  return (
    <h1>
      Category {slug} from {from}
    </h1>
  );
};

export default CategorySlug;

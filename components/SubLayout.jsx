import Link from "next/link";
import React from "react";

const SubLayout = ({ children }) => {
  return (
    <div>
      <Link href={"/"}>
        <a>홈으로</a>
      </Link>
      {children}
    </div>
  );
};

export default SubLayout;

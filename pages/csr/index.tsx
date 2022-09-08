import React, { useEffect, useState } from "react";

const CSR = () => {
  const [date, setDate] = useState<string>();

  useEffect(() => {
    setDate(new Date().toISOString());
  }, []);

  return <div>{date}</div>;
};

export default CSR;

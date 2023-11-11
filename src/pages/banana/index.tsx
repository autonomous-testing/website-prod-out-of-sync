import React, { useEffect } from "react";

import { useHistory } from "@docusaurus/router";

const Banana = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/beer");
  }, []);

  return <></>;
};
export default Banana;
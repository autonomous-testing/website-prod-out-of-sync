import React, { useEffect } from "react";

import { useHistory } from "@docusaurus/router";

const OldTermsPage = () => {
  const router = useHistory();

  useEffect(() => {
    router.push("/terms-and-conditions");
  }, []);

  return <></>;
};
export default OldTermsPage;

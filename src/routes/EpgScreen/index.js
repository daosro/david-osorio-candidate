import React, { Suspense } from "react";
import Spinner from "../../components/Spinner";

const EpgScreen = React.lazy(() => import("./EpgScreen"));

const EpgScreenRoute = () => (
  <Suspense fallback={<Spinner />}>
    <EpgScreen />
  </Suspense>
);

export default EpgScreenRoute;

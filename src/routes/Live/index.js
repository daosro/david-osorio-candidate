import React, { Suspense } from "react";
import Spinner from "../../components/Spinner";

const Live = React.lazy(() => import("./Live"));

const LiveRoute = () => (
  <Suspense fallback={<Spinner />}>
    <Live />
  </Suspense>
);

export default LiveRoute;

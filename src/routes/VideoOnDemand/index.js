import React, { Suspense } from "react";
import Spinner from "../../components/Spinner";

const VideoOnDemand = React.lazy(() => import("./VideoOnDemand"));

const VideoOnDemandRoute = () => (
  <Suspense fallback={<Spinner />}>
    <VideoOnDemand />
  </Suspense>
);

export default VideoOnDemandRoute;

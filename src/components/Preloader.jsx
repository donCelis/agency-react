import React, { useState, useEffect } from "react";
import { Dots } from "react-preloaders";

const Preloader = ({timeOut=1200}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, timeOut);
  }, [loading, timeOut]);
  
  return (
    <Dots
      customLoading={loading}
      time={0}
      color={"white"}
      background="hsl(168, 76%, 42%)"
      animation="fade"
    />
  );
};

export default Preloader;
